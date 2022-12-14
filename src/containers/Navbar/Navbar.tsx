import { useContext, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Icon, IconNameType, Pill } from '@/components';
import { AppContext } from '@/contexts/AppState.context';

export const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <aside className="top-0 md:col-span-2 p-2 md:border-r border-tertiary md:h-screen md:sticky">
      <div className="flex justify-between">
        <Navbar.Header icon="Logo">Untitled UI</Navbar.Header>
        <Button
          className="inline-flex items-center p-2 ml-3 rounded-lg md:hidden"
          onClick={() => setShow(prev => !prev)}
        >
          <Icon name="MenuIcon" />
        </Button>
      </div>

      <div
        className={`${
          show ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
        } transition-all duration-500 md:opacity-100 md:h-auto`}
        ref={ref}
      >
        <Navbar.List>
          <Navbar.Item href="/" icon={'HomeIcon'}>
            Home
          </Navbar.Item>
          <Navbar.Item href="/users" icon={'DashboardIcon'}>
            Dashboard
          </Navbar.Item>
          <Navbar.Item href="#" icon={'ProjectsIcon'}>
            Projects
          </Navbar.Item>
          <Navbar.Item href="#" icon="TasksIcon">
            Tasks
            <Pill value={10} />
          </Navbar.Item>
          <Navbar.Item href="#" icon="ReportIcon">
            Reporting
          </Navbar.Item>
          <Navbar.Item href="/profile" icon="UserIcon">
            Profile
          </Navbar.Item>
        </Navbar.List>

        <Navbar.List className="md:absolute md:bottom-2 w-11/12">
          <Navbar.Item icon={'HomeIcon'}>
            Notitications
            <Pill value={4} />
          </Navbar.Item>
          <Navbar.Item icon={'DashboardIcon'}>Support</Navbar.Item>
          <Navbar.Item icon={'ProjectsIcon'}>Settings</Navbar.Item>
          <Navbar.Profile />
        </Navbar.List>
      </div>
    </aside>
  );
};

const Profile: React.FC<any> = () => {
  const appContext = useContext(AppContext);

  return (
    <Link href="/profile">
      <div className="cursor-pointer mt-2 border rounded-lg border-tertiary p-3 flex items-center" tabIndex={0}>
        <Image
          src={appContext?.userData?.avatar || '/images/avatar.png'}
          width={50}
          height={50}
          alt="profile photo"
          className="rounded-full"
        />
        <div className="flex w-full flex-col ml-3 text-sm text-inverted">
          <span>{`${appContext?.userData?.first_name} ${appContext?.userData?.last_name}`}</span>
          <span className="font-light">{`@${appContext?.userData?.first_name?.toLowerCase()}`}</span>
        </div>
      </div>
    </Link>
  );
};

const Header: React.FC<ItemProps> = ({ ...props }) => {
  return (
    <div className="flex items-center p-2">
      <Icon name={props.icon} className="group-hover:stroke-primary" />
      <span className="text-inverted text-lg font-bold text-center">{props.children}</span>
    </div>
  );
};

const List: React.FC<ListProps> = ({ children, ...props }) => {
  return (
    <ul className="mt-2" {...props}>
      {children}
    </ul>
  );
};

const Item: React.FC<ItemProps> = ({ icon, href, ...props }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href ?? '#'}>
      <li
        className={`mb-1 text-sm group flex items-center gap-2 font-medium hover:bg-secondary rounded-md p-2 cursor-pointer transition-all hover:text-primary text-inverted ${
          isActive && 'bg-secondary-50 text-primary'
        }`}
      >
        <Icon name={icon} className={`group-hover:stroke-primary ${isActive && 'stroke-primary'}`} />
        {props.children}
      </li>
    </Link>
  );
};

Navbar.Item = Item;
Navbar.List = List;
Navbar.Header = Header;
Navbar.Profile = Profile;

interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon: IconNameType;
  href?: string;
}

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}
