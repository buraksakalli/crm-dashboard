import { useState } from 'react';
import { useUsersList } from 'src/hooks';
import { Card, Modal, Tab, Table } from '@/components';

function Main() {
  const [activePage, setActivePage] = useState<number>(1);
  const { loading, data } = useUsersList({ activePage });

  return (
    <>
      <Tab>
        <Tab.Item active>Overview</Tab.Item>
        <Tab.Item>Table</Tab.Item>
        <Tab.Item>List view</Tab.Item>
        <Tab.Item>Segment</Tab.Item>
        <Tab.Item>Custom</Tab.Item>
      </Tab>
      <section>
        <section className="grid grid-cols-12 gap-4 mt-4">
          <Card title="Total customers" value={2420} increase={20} />
          <Card title="Members" value={1210} increase={15} />
          <Card title="Active Now" value={1210} decrease={15} />
        </section>
        <Table data={data!} onClick={page => setActivePage(page)} loading={loading} />
      </section>
    </>
  );
}

export default Main;
