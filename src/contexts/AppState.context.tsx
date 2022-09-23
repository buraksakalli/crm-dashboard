import { IUserData } from 'pages/api/users/user.types';
import React, { createContext, useEffect, useReducer } from 'react';

export interface IAppState {
  modal: boolean;
  userData: IUserData;
  actionType: 'ADD' | 'EDIT' | 'DELETE';
  auth: {
    token: string;
    isAuthenticated: boolean;
  };
}

export const initialAppState: IAppState = {
  modal: false,
  userData: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  actionType: 'ADD',
  auth: {
    token: '',
    isAuthenticated: false,
  },
};

export enum AppContextActionTypeEnum {
  SET_SHOW_MODAL = 'SET_SHOW_MODAL',
  SET_USER_DATA = 'SET_USER_DATA',
  SET_ACTION_TYPE = 'SET_ACTION_TYPE',
  SET_USER_TOKEN = 'SET_USER_TOKEN',
}

export interface IAppContextAction {
  type: AppContextActionTypeEnum;
  value?: IUserData | boolean | 'EDIT' | 'ADD' | 'DELETE' | any;
}

const reducer = (state: IAppState, action: IAppContextAction) => {
  switch (action.type) {
    case AppContextActionTypeEnum.SET_SHOW_MODAL:
      return { ...state, modal: action.value };
    case AppContextActionTypeEnum.SET_USER_DATA:
      return { ...state, userData: action.value };
    case AppContextActionTypeEnum.SET_ACTION_TYPE:
      return { ...state, actionType: action.value };
    case AppContextActionTypeEnum.SET_USER_TOKEN:
      return { ...state, auth: action.value };

    default:
      return state;
  }
};

export const AppContext = createContext<IAppState>(initialAppState);
export const AppContextDispatcher = createContext<React.Dispatch<IAppContextAction>>(() => {});

export const AppContextProvider = (props: any) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialAppState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({
        type: AppContextActionTypeEnum.SET_USER_TOKEN,
        value: {
          token,
          isAuthenticated: true,
        },
      });
    }
  }, []);

  return (
    <AppContext.Provider value={state}>
      <AppContextDispatcher.Provider value={dispatch}>{props.children}</AppContextDispatcher.Provider>
    </AppContext.Provider>
  );
};
