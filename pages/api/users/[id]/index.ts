import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { IUserData } from '../user.types';

export default function handler(req: NextApiRequest, res: NextApiResponse<IUserData | any>) {
  let data = {
    status: 'success',
  };

  if (req.method === 'GET') {
    const data = {
      id: Number(req.query.id),
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar(),
    };

    res.status(200).json({ data });
  } else if (req.method === 'PUT') {
    res.status(200).json({ data });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ data });
  }
}
