import type { NextApiRequest, NextApiResponse } from 'next';
import { IUserData } from './users/user.types';

interface ILoginData {
  data: {
    status: string;
    user: IUserData;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ILoginData>) {
  const data = {
    status: 'success',
    user: {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
  };

  res.status(200).json({ data });
}
