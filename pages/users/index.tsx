import { Table } from '@/components';
import { useState } from 'react';
import { useUsersList } from 'src/hooks';

const Users = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { loading, data } = useUsersList({ activePage });

  return <Table data={data!} onClick={page => setActivePage(page)} loading={loading} />;
};

export default Users;
