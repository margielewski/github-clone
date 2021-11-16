import { CommitsList } from 'components/CommitsList/CommitsList';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { MainLayout } from 'components/MainLayout/MainLayout';
import { ReactElement, ReactNode, useMemo } from 'react';
import { RepositoryDetails } from 'components/RepositoryDetails/RepositoryDetails';
import { useRepositoryQuery } from 'graphql/useRepositoryQuery';
import { useRouter } from 'next/router';
import styles from 'styles/Repository.module.css';
import type { NextPage } from 'next';

type RepositoryProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type RouterParams = { name: string; owner: string };

const Repository = ({}: RepositoryProps) => {
  const router = useRouter();
  const { owner, name } = router.query as RouterParams;
  const { data, loading } = useRepositoryQuery({ name, owner });
  const repositoryData = data?.repository || undefined;

  const commitsList = useMemo(() => {
    if (repositoryData?.defaultBranchRef?.target?.__typename !== 'Commit')
      return;
    return repositoryData?.defaultBranchRef?.target;
  }, [repositoryData]);

  return (
    <div className={styles['container']}>
      <div className={styles['container-wrapper']}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <RepositoryDetails data={repositoryData} />
            <CommitsList data={commitsList} />
          </>
        )}
      </div>
    </div>
  );
};

Repository.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Repository;
