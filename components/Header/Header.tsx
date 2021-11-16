import dynamic from 'next/dynamic';
import styles from 'styles/Header.module.css';
import NextLink from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const ThemeSwitch = dynamic(() => import('../ThemeSwitch/ThemeSwitch'), {
  ssr: false,
});

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className={styles['header']}>
      <ThemeSwitch className={styles['header-switch']} />
      <NextLink href={'/'}>
        <h1 className={styles['header-logo']}>GitHub Clone</h1>
      </NextLink>
      {session && (
        <button onClick={() => signOut()} className={styles['header-logout']}>
          <i className={'gg-log-off'} />
        </button>
      )}
    </header>
  );
};

export default Header;
