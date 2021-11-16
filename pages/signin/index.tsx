import React, { ReactElement, ReactNode } from 'react';
import { AuthLayout } from 'components/AuthLayout/AuthLayout';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import Button from 'components/Button/Button';
import Image from 'next/image';
import image from 'public/download.png';
import styles from 'styles/Signin.module.css';
import { NextPage } from 'next';

type SignInProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  providers: Record<string, ClientSafeProvider>;
};

const SignIn = ({ providers }: SignInProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} layout={'responsive'} alt={'Octocat'} />
      </div>
      {Object.values(providers).map((provider) => (
        <Button key={provider.name} onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </Button>
      ))}
    </div>
  );
};

export default SignIn;

SignIn.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
