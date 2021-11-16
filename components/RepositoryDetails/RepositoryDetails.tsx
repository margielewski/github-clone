import { RepositoryDetailsFragment } from 'types/graphql/types';
import Image from 'next/image';
import styles from 'styles/RepositoryDetails.module.css';
import dayjs from 'dayjs';

type RepositoryDetailsProps = { data?: RepositoryDetailsFragment };

export const RepositoryDetails = ({ data }: RepositoryDetailsProps) => {
  return (
    <div className={styles['repository']}>
      <h2 className={styles['repository-title']}>Basic informations</h2>
      <div className={styles['repository-wrapper']}>
        <div className={styles['repository-owner']}>
          {data?.owner.avatarUrl && (
            <Image
              width={150}
              height={150}
              src={data?.owner.avatarUrl}
              alt={data?.owner.login}
            />
          )}
          <div className={styles['repository-owner-name']}>
            {data?.owner.login}
          </div>
        </div>
        <div className={styles['repository-details']}>
          <div className={styles['repository-details-row']}>
            <div className={styles['repository-details-label']}>{'Code:'}</div>
            <div className={styles['repository-details-value']}>
              {data?.sshUrl}
            </div>
          </div>
          <div className={styles['repository-details-row']}>
            <div className={styles['repository-details-label']}>{'Name:'}</div>
            <div className={styles['repository-details-value']}>
              {data?.name}
            </div>
          </div>
          <div className={styles['repository-details-row']}>
            <div className={styles['repository-details-label']}>
              {'Created at:'}
            </div>
            <div className={styles['repository-details-value']}>
              {dayjs(data?.createdAt).format('DD/MM/YYYY')}
            </div>
          </div>
          <div className={styles['repository-details-row']}>
            <div className={styles['repository-details-label']}>
              {'Description:'}
            </div>
            <div className={styles['repository-details-value']}>
              {data?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
