import 'styles/globals.css';
import 'styles/theme.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'boot/client';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ApolloProvider>
  );
}

export default App;
