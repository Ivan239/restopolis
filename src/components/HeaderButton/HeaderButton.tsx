import React, { ReactNode } from 'react';
import styles from './HeaderButton.module.css';

type HeaderButtonProps = {
  children: ReactNode;
};

function HeaderButton({ children }: HeaderButtonProps) {
  return (
    <div className={styles.button}>
      <h2>{children}</h2>
    </div>
  );
}

export default HeaderButton;
