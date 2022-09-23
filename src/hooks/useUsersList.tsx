import { useEffect, useState } from 'react';
import { getUsers } from '@/api';
import { UserProps } from 'pages/api/users/user.types';

type IUser = {
  activePage: number;
};

export const useUsersList = ({ activePage }: IUser) => {
  const [usersList, setUsersList] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getUsers({ activePage }).then(data => {
      setUsersList(data);
      setLoading(false);
    });
  }, [activePage]);

  return { data: usersList, loading };
};
