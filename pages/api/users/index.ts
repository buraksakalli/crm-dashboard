import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { UserProps } from './user.types';

export default function handler(req: NextApiRequest, res: NextApiResponse<UserProps | any>) {
  if (req.method === 'GET') {
    const page = Number(req.query.page) || 1;
    const data = [...new Array(10)].map((_, index) => {
      return {
        id: index + 1,
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.avatar(),
      };
    });

    const response = {
      page,
      per_page: 10,
      total: 30,
      total_pages: 3,
      data,
    };

    res.status(200).json(response);
  } else if (req.method === 'POST') {
    res.status(200).json({
      data: {
        status: 'success',
      },
    });
  }
}
