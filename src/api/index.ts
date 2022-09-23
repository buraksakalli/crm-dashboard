import { ILoginData } from 'pages/api/login';

type getUserType = {
  activePage: number;
};

export const getUsers = ({ activePage }: getUserType) => {
  return fetch(`/api/users?page=${activePage}`).then(res => res.json());
};

export const getUserById = (id: number) => {
  return fetch(`/api/users/${id}`).then(res => res.json());
};

export const createUser = (user: any) => {
  return fetch(`/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
};

export const updateUser = (user: any) => {
  return fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
};

export const deleteUser = (id: Array<number> | number) => {
  const ids = Array.isArray(id) ? `ids=${id.join(',')}` : id;

  return fetch(`/api/users/${ids}`, {
    method: 'DELETE',
  }).then(res => res.json());
};

export const login = (user: { email: string; password: string }): ILoginData | any => {
  return fetch(`/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(res => res.json());
};

export const auth = ({ token }: { token: string }) => {
  return fetch(`/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  }).then(res => res.json());
};
