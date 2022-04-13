import React from 'react';
import styles from './MenuButton.module.css';

type MenuButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
};

function MenuButton({ children, onClick, type }: MenuButtonProps) {
  return (
    <button
      className={styles['menu-button']}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

MenuButton.defaultProps = {
  type: 'button',
  onClick: function foo() {
    // This is intentional
  },
};

export default MenuButton;
