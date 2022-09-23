import { AppContextProvider } from '@/contexts/AppState.context';

interface IProps {
  children?: any;
}

export function Providers({ children }: IProps) {
  return <AppContextProvider>{children}</AppContextProvider>;
}

export * from './withProviders';
