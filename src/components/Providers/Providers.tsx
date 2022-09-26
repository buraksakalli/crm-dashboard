import { AppContextProvider } from '@/contexts/AppState.context';
import { ToastContainer } from 'react-toastify';

interface IProps {
  children?: any;
}

export function Providers({ children }: IProps) {
  return (
    <AppContextProvider>
      {children}
      <ToastContainer />
    </AppContextProvider>
  );
}

export * from './withProviders';
