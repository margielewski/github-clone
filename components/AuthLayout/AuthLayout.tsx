import { PropsWithChildren, useEffect } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from 'styles/AuthLayout.module.css';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

type AuthLayoutProps = PropsWithChildren<unknown>;

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      Router.push('/');
    }
  }, [session, status]);

  if (session) return null;

  return (
    <main className={styles['container']}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
