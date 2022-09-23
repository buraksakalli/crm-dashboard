import { useEffect, useState } from 'react';
import { getUserById } from '@/api';
import { IUserData } from 'pages/api/users/user.types';

type IUser = {
  id: number;
};

type IUserResponse = {
  data?: IUserData;
  loading: boolean;
};

export const useUserData = ({ id }: IUser): IUserResponse => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      console.log({ id });
      getUserById(id).then(data => {
        setUserData(data.data);
        setLoading(false);
      });
    }
  }, [id]);

  if (id) return { data: userData!, loading };
  return { loading };
};
