import { PropsWithChildren } from 'react';

type MainLayoutProps = PropsWithChildren<Record<string, never>>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
