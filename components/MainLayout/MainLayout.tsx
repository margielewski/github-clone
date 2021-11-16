import { useSession } from 'next-auth/react';
import { PropsWithChildren, useEffect } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import styles from 'styles/MainLayout.module.css';
import Router from 'next/router';

type MainLayoutProps = PropsWithChildren<unknown>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.push('/signin');
    }
  }, [session, status]);

  if (!session) return null;
  return (
    <main className={styles['container']}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
