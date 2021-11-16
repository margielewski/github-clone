import React from 'react';
import styles from 'styles/LoadingSpinner.module.css';

export const LoadingSpinner = () => {
  return (
    <div className={styles['spinner']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
