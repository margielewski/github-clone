import { PropsWithChildren } from 'react';

type AuthLayoutProps = PropsWithChildren<Record<string, never>>;

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
