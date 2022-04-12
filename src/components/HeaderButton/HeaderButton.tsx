import React from 'react';
import styles from './HeaderButton.module.css';

type HeaderButtonProps = {
  children: Node;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ children, onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    <h2>{children}</h2>
  </button>
);

export default HeaderButton;
