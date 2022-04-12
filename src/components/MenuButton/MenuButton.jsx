import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuButton.module.css';

function MenuButton(props) {
  const {children, onClick, type} = props;
  return (
    <button className={styles['menu-button']} type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

MenuButton.defaultProps = {
  children: '',
  onClick: function foo() {
    // This is intentional
  },
  type: '',
};

export default MenuButton;
