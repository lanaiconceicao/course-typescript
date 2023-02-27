import React from 'react';

// CSS
import styles from './Modal.module.css'

export interface IAppProps {
  children: React.ReactNode
}

export function Modal ({ children }: IAppProps) {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')
  }

  return (
    <div id="modal" className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        { children }
      </div>
    </div>
  );
}
