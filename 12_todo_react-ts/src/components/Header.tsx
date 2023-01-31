import React from 'react';

import styles from './Header.module.css'

export function Header () {
  return (
    <header className={styles.header}>
      <h1>React + TS Todo</h1>
    </header>
  );
}
