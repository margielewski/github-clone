import styles from 'styles/CommitsList.module.css';
import { CommitFragment } from 'types/graphql/types';
import Image from 'next/image';

type CommitsListProps = { data?: CommitFragment };

export const CommitsList = ({ data }: CommitsListProps) => (
  <div className={styles['commits']}>
    <h2 className={styles['commits-title']}>Latest Commits</h2>
    <ul className={styles['commits-list']}>
      {data?.history.edges?.map((item) => (
        <li className={styles['commits-list-item']} key={item?.node?.id}>
          <div className={styles['commits-author']}>
            <div className={styles['commits-image']}>
              <Image
                width={40}
                height={40}
                src={item?.node?.author?.avatarUrl}
                alt={item?.node?.author?.name ?? ''}
              />
            </div>
            {item?.node?.author?.name}
          </div>
          {item?.node?.messageHeadline}
        </li>
      ))}
    </ul>
  </div>
);
