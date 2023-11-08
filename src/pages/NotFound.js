import React from "react";
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sorry, the Page is not found 😱</h1>
    </div>
  );
};
