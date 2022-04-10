import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButton.module.css';

function HeaderButton(props) {
  const {
    children,
    onClick,
  } = props;
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <h2>{children}</h2>
    </button>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

HeaderButton.defaultProps = {
  children: null,
  onClick: () => function foo() {},
};

export default HeaderButton;
