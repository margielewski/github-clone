import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { MainLayout } from 'components/MainLayout/MainLayout';
import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import { RepositoryFragment, SearchType } from 'types/graphql/types';
import { useDebounce } from 'hooks/useDebounce';
import { useSearchQuery } from 'graphql/useSearchQuery';
import Input from 'components/Input/Input';
import RepositoriesList from 'components/RepositoriesList/RepositoriesList';
import styles from 'styles/Home.module.css';
import type { NextPage } from 'next';

type HomeProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home = ({}: HomeProps) => {
  const [search, { loading, data }] = useSearchQuery();
  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedSearch = useDebounce(searchInputValue, 400);

  useEffect(() => {
    search({
      variables: {
        query: debouncedSearch,
        type: SearchType.Repository,
        first: 10,
      },
    });
  }, [debouncedSearch, search]);

  const repositoriesData = useMemo(
    () =>
      data?.search.edges?.map((item) =>
        item?.node?.__typename === 'Repository' ? item.node : null
      ) as RepositoryFragment[],
    [data]
  );

  return (
    <div className={styles['container']}>
      <Input
        onChange={(e) => setSearchInputValue(e.target.value)}
        placeholder="Search Repositories"
        type="text"
        value={searchInputValue}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <RepositoriesList data={repositoriesData || []} />
      )}
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
