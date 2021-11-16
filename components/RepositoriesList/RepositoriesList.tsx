import styles from 'styles/RepositoriesList.module.css';
import { RepositoryFragment } from 'types/graphql/types';
import Image from 'next/image';
import NextLink from 'next/link';

type RepositoriesListProps = { data: RepositoryFragment[] };

const RepositoriesList = ({ data }: RepositoriesListProps) => {
  return (
    <div className={styles['list']}>
      {data.map(
        ({
          forkCount,
          id,
          name,
          owner: { avatarUrl, login },
          watchers: { totalCount: watchersCount },
        }) => (
          <NextLink key={id} href={`/repository/${login}/${name}`}>
            <div className={styles['list-item']}>
              <div className={styles['list-item-user']}>
                <Image width={40} height={40} src={avatarUrl} alt={login} />
                <h2 className={styles['list-item-username']}>{login}</h2>
              </div>
              <p className={styles['list-item-title']}>{name}</p>
              <div className={styles['list-item-info']}>
                <div className={styles['list-item-row']}>
                  {watchersCount}
                  <span className={styles['list-item-row-icon-wrapper']}>
                    <i className={'gg-eye'} />
                  </span>
                </div>
                <div className={styles['list-item-row']}>
                  {forkCount}
                  <span className={styles['list-item-row-icon-wrapper']}>
                    <i className={'gg-git-fork'} />
                  </span>
                </div>
              </div>
            </div>
          </NextLink>
        )
      )}
    </div>
  );
};

export default RepositoriesList;
