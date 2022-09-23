import React, { useContext, useEffect, useReducer } from 'react';
import { createUser, deleteUser, updateUser } from '@/api';
import { AppContext, AppContextActionTypeEnum, AppContextDispatcher } from '@/contexts/AppState.context';
import { Button, Input, Icon } from '@/components';

export const Modal = ({ ...props }) => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);

  const handleClose = () => appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false });

  const title = () => {
    switch (appContext.actionType) {
      case 'ADD':
        return 'Add new user';
      case 'EDIT':
        return 'Edit user';
      case 'DELETE':
        return 'Delete user';
      default:
        return 'Add new user';
    }
  };

  return (
    <div
      className={`${
        !appContext.modal && 'hidden'
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full flex items-center justify-center bg-black bg-opacity-80`}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative rounded-lg shadow bg-base-500">
          <Button
            onClick={handleClose}
            className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 rounded-lg p-1.5 group"
          >
            <Icon name="PlusIcon" className="rotate-45 group-active:rotate-90 transition-all" />
          </Button>

          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{title()}</h3>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeleteAllUsers = () => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);

  const handleDelete = async () => {
    const users = appContext.selectedIds.map(user => user.id);
    await deleteUser(users);

    appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-500 text-center">Are you sure you want to delete the selected users?</p>
      <div className="flex gap-2 items-center justify-center">
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={() => appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false })}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export const DeleteUser = () => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);

  const handleDelete = async () => {
    await deleteUser(appContext.selectedUserData.id);
    appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-500 text-center">
        Are you sure you want to delete <span className="font-medium">{appContext.selectedUserData.first_name}</span>?
      </p>
      <div className="flex gap-2 items-center justify-center">
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={() => appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false })}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export const CreateUserForm = () => {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatcher);

  const [formData, dispatch] = useReducer(
    (current: any, newValue: any) => ({ ...current, ...newValue }),
    appContext.selectedUserData,
  );

  useEffect(() => {
    dispatch(appContext.selectedUserData);
  }, [appContext.selectedUserData]);

  const { first_name, last_name, email } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    let res;

    if (appContext.actionType === 'ADD') res = await createUser({ first_name, last_name, email });
    else if (appContext.actionType === 'EDIT')
      res = await updateUser({ id: appContext.selectedUserData.id, first_name, last_name, email });

    if (res.data.status === 'success') handleClose();
    else console.error('Error');
  };

  const handleClose = () => appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: false });

  return (
    <form onSubmit={onFormSubmit}>
      <div className="my-4">
        <Input
          type="text"
          label="First Name"
          name="first_name"
          onChange={handleOnChange}
          value={first_name}
          required
          pattern="^[a-zA-Z]+$"
        />
        <Input
          type="text"
          label="Last Name"
          name="last_name"
          onChange={handleOnChange}
          value={last_name}
          required
          pattern="^[a-zA-Z]+$"
        />
        <Input
          type="text"
          label="E-mail Address"
          name="email"
          onChange={handleOnChange}
          value={email}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Button type="submit" variant="primary">
          {appContext.actionType === 'ADD' ? 'Create' : 'Edit'}
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </form>
  );
};

Modal.UserForm = CreateUserForm;
Modal.DeleteUser = DeleteUser;
Modal.DeleteAllUsers = DeleteAllUsers;
