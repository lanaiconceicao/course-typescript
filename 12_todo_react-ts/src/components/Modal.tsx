import React from 'react';

// CSS
import styles from './Modal.module.css'

export interface IAppProps {
  children: React.ReactNode
}

export function Modal ({ children }: IAppProps) {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        { children }
      </div>
    </div>
  );
}
