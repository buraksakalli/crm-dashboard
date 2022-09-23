import { useContext } from 'react';
import { AppContextActionTypeEnum, AppContextDispatcher, initialAppState } from '@/contexts/AppState.context';
import { ModalSpecificView, Navbar } from '@/containers';
import { Button, Icon } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const appContextDispatch = useContext(AppContextDispatcher);

  const handleAddUser = () => {
    appContextDispatch({ type: AppContextActionTypeEnum.SET_ACTION_TYPE, value: 'ADD' });
    appContextDispatch({ type: AppContextActionTypeEnum.SET_USER_DATA, value: initialAppState.userData });
    appContextDispatch({ type: AppContextActionTypeEnum.SET_SHOW_MODAL, value: true });
  };

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
            </div>
          </div>
          <div>{children}</div>
        </main>
      </div>
      <ModalSpecificView />
    </section>
  );
}

export default Layout;
