import { useEffect, useState } from 'react';
import { auth } from '@/api';
import { ILoginData } from 'pages/api/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  const isTokenValid = async (token: string) => {
    const res: ILoginData = await auth({ token });

    if (res.data.status) setUser(res.data.user);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
      isTokenValid(token);
    }
  }, []);

  return { user, token };
};
