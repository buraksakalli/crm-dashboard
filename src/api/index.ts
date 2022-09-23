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

export const deleteUser = (id: number) => {
  return fetch(`/api/users/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
};
