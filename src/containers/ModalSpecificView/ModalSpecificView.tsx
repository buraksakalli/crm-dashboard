import { useContext } from 'react';
import { AppContext } from '@/contexts/AppState.context';
import { Modal } from '@/components';

const UserForm = () => {
  return (
    <Modal>
      <Modal.UserForm />
    </Modal>
  );
};

const DeleteForm = () => {
  return (
    <Modal>
      <Modal.DeleteUser />
    </Modal>
  );
};

const DeleteAllUsers = () => {
  return (
    <Modal>
      <Modal.DeleteAllUsers />
    </Modal>
  );
};

const ModalView = {
  EDIT: UserForm,
  ADD: UserForm,
  DELETE: DeleteForm,
  DELETE_ALL: DeleteAllUsers,
};

export const ModalSpecificView = () => {
  const appContext = useContext(AppContext);

  const ModalSpecificView = ModalView[appContext.actionType] ?? <Modal.UserForm />;

  return <ModalSpecificView />;
};
