import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IUserData } from './users/user.types';

export interface ILoginData {
  data: {
    status: string;
    user: IUserData;
    token: string;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ILoginData>) {
  const data = {
    status: 'success',
    user: {
      id: 0,
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar(),
    },
    token: faker.random.word(),
  };

  res.status(200).json({ data });
}
