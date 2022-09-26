import React, { useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { IUserData, UserProps } from 'pages/api/users/user.types';
import { AppContextActionTypeEnum, AppContextDispatcher } from '@/contexts/AppState.context';
import { Button, Icon, Image } from '@/components';

export interface TableProps {
  data: UserProps;
  onClick: (page: number) => void;
  loading: boolean;
}

export const Table: React.FC<TableProps> = ({ data, onClick, loading }) => {
  const appContextDispatch = useContext(AppContextDispatcher);
  const [selectedItems, setSelectedItems] = useState<Array<IUserData>>([]);
  const [filteredData, setFilteredData] = useState<UserProps>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleClickByAction = (action: 'EDIT' | 'DELETE' | 'ADD' | 'DELETE_ALL', id: number | Array<IUserData>) => {
    if (!Array.isArray(id)) {
      const user = data.data.find((user: IUserData) => user.id === id);
      appContextDispatch({ type: AppContextActionTypeEnum.SET_SELECTED_USER_DATA, value: user });
    } else appContextDispatch({ type: AppContextActionTypeEnum.SET_SELECTED_IDS, value: id });

    appContextDispatch({ type: AppContextActionTypeEnum.SET_ACTION_TYPE, value: action });
    appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: true });
  };

  const debounce = (func: any) => {
    let timer: any;
    return function (this: unknown, ...args: any) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(onKeyUpHandler), [data]);

  function onKeyUpHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;

    const filteredData = data?.data.filter((user: IUserData) => {
      return user.first_name.toLowerCase().includes(search) || user.last_name.toLowerCase().includes(search);
    });
    if (filteredData) setFilteredData({ ...data, data: filteredData });
  }

  return (
    <div className="overflow-x-auto relative sm:rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-4 pr-2">
        <div className="flex gap-2">
          <Button variant="filter">
            All time
            <Icon name="PlusIcon" className="rotate-45 stroke-primary group-active:rotate-90 transition-all" />
          </Button>
          <Button variant="filter">
            US, AU, +4
            <Icon name="PlusIcon" className="rotate-45 stroke-primary group-active:rotate-90 transition-all" />
          </Button>
          <Button>
            <Icon name="FilterIcon" className="stroke-inverted transition-all" />
            More filters
          </Button>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Icon name="SearchIcon" className="stroke-inverted" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            onKeyUp={optimizedFn}
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-base-500">
          <tr>
            <Checkbox onChange={e => (e.target.checked ? setSelectedItems(data.data) : setSelectedItems([]))} />
            <Head>Company</Head>
            <Head>Company</Head>
            <Head>Status</Head>
            <Head>About</Head>
            <Head>Users</Head>
            <Head>License Use</Head>
            <Head>
              {selectedItems.length > 0 ? (
                <Button variant="borderless" onClick={() => handleClickByAction('DELETE_ALL', selectedItems)}>
                  <Icon name="TrashIcon" width={20} />
                </Button>
              ) : (
                'Action'
              )}
            </Head>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? filteredData?.data.map((item: IUserData) => (
                <Row
                  data={item}
                  key={item.id}
                  onEdit={() => handleClickByAction('EDIT', item.id)}
                  onRemove={() => handleClickByAction('DELETE', item.id)}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                />
              ))
            : [...Array(10)].map((item: any, i: number) => (
                <tr key={i}>
                  {[...Array(7)].map((item: any, i: number) => {
                    return (
                      <Data key={i}>
                        <div className={'animate-pulse rounded-md'}>
                          <div className="bg-tertiary mb-4 h-5 w-full animate-pulse rounded-md" />
                        </div>
                      </Data>
                    );
                  })}
                </tr>
              ))}
        </tbody>
      </table>
      <Pagination loading={loading} data={filteredData} onClick={page => onClick(page)} />
    </div>
  );
};

const Pagination: React.FC<TableProps> = ({ data, onClick, loading }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <Button
        disabled={data?.page <= 1}
        onClick={() => {
          if (data?.page > 1) onClick(data?.page - 1);
        }}
      >
        Previous
      </Button>

      <span className="text-sm">
        Page {data?.page} of {data?.total_pages}
      </span>

      <Button
        disabled={data?.page === data?.total_pages}
        onClick={() => {
          if (data?.page < data?.total_pages) onClick(data?.page + 1);
        }}
      >
        Next
      </Button>
    </div>
  );
};

interface IRowProps {
  data: IUserData;
  onEdit: any;
  onRemove: any;
  selectedItems: Array<IUserData>;
  setSelectedItems: React.Dispatch<React.SetStateAction<IUserData[]>>;
}

const Row: React.FC<IRowProps> = ({ data, onEdit, onRemove, selectedItems, setSelectedItems }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <Checkbox
        checked={selectedItems.findIndex(a => a.id === data.id) >= 0}
        onChange={() => {
          if (selectedItems.findIndex(a => a.id === data.id) >= 0) {
            setSelectedItems(selectedItems.filter(a => a.id !== data.id));
          } else {
            setSelectedItems([...selectedItems, data]);
          }
        }}
      />
      <Data>
        {
          <Link href={`/users/${data.id}`}>
            <a>
              <Image
                className="rounded-full"
                src={data.avatar}
                width={30}
                height={30}
                alt={`${data?.first_name?.toLowerCase().replace(' ', '-')}-profile-photo`}
              />
            </a>
          </Link>
        }
      </Data>
      <Data>{data.email}</Data>
      <Data>{data.first_name}</Data>
      <Data>{data.last_name}</Data>
      <Data>{data.last_name}</Data>
      <Data>
        <div className="w-full bg-tertiary rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: Math.floor(data.id * 7) }}></div>
        </div>
      </Data>
      <Data>
        <div className="flex items-center">
          <Button variant="borderless" onClick={() => onEdit(data.id)}>
            <Icon name="EditIcon" width={20} />
          </Button>
          <Button variant="borderless" onClick={() => onRemove(data.id)}>
            <Icon name="TrashIcon" width={20} />
          </Button>
          <Link href={`/users/${data.id}`}>
            <a>
              <Icon name="Arrow" className="rotate-90" width={20} />
            </a>
          </Link>
        </div>
      </Data>
    </tr>
  );
};

interface TableDataProps extends React.TableHTMLAttributes<HTMLTableDataCellElement> {}

const Data: React.FC<TableDataProps> = ({ ...props }) => {
  return (
    <td className="py-4 px-6" {...props}>
      {props.children}
    </td>
  );
};

interface CheckboxPros extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxPros> = ({ ...props }) => {
  return (
    <td className="p-4 w-4">
      <div className="flex items-center">
        <input
          {...props}
          id="table-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2  "
        />
        <label htmlFor="table-checkbox" className="sr-only">
          checkbox
        </label>
      </div>
    </td>
  );
};

const Head: React.FC<{ children: React.ReactNode }> = ({ ...props }) => {
  return <th className="py-3 px-6 capitalize text-muted">{props.children}</th>;
};
