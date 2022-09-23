import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Layout } from '@/layouts';
import { Providers } from '@/components';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    (page => (
      <Providers pageProps={pageProps}>
        <Layout>{page}</Layout>
      </Providers>
    ));

  return getLayout(<Component {...pageProps} />);
}
