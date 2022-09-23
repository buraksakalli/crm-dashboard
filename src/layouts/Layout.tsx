import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  AppContext,
  AppContextActionTypeEnum,
  AppContextDispatcher,
  initialAppState,
} from '@/contexts/AppState.context';
import { ModalSpecificView, Navbar } from '@/containers';
import { Button, Icon, Loading } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const appContextDispatch = useContext(AppContextDispatcher);
  const appContext = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (appContext.auth.isAuthenticated) setLoading(false);
    else router.push('/login');
  }, [appContext.auth.isAuthenticated]);

  const handleAddUser = () => {
    appContextDispatch({ type: AppContextActionTypeEnum.SET_ACTION_TYPE, value: 'ADD' });
    appContextDispatch({
      type: AppContextActionTypeEnum.SET_SELECTED_USER_DATA,
      value: initialAppState.selectedUserData,
    });
    appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: true });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    appContextDispatch({ type: AppContextActionTypeEnum.SET_USER_TOKEN, value: { token: '', isAuthenticated: false } });
    router.push('/login');
  };

  if (!loading)
    return (
      <section className="w-full">
        <div className="md:grid md:grid-cols-12 gap-5">
          <Navbar />
          <main className="md:col-span-10 p-4">
            <div className="flex justify-between md:flex-row flex-col mb-2">
              <span className="text-inverted text-3xl font-medium">Customers</span>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button>
                  <Icon className="stroke-inverted" name="CloudIcon" />
                  Import
                </Button>
                <Button variant="primary" onClick={handleAddUser}>
                  <Icon name="PlusIcon" className="stroke-white" />
                  Add customer
                </Button>
                <Button onClick={handleLogout}>
                  <Icon className="stroke-inverted" name="LogoutIcon" />
                  Logout
                </Button>
              </div>
            </div>
            <div>{children}</div>
          </main>
        </div>
        <ModalSpecificView />
      </section>
    );
  return <Loading />;
}

export default Layout;
