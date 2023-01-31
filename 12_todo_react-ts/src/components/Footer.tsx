import React from 'react';

import styles from './Footer.module.css'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @2023
      </p>
    </footer>
  );
}
