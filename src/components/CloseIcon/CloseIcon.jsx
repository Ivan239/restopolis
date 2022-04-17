import React from 'react';
import PropTypes from 'prop-types';
import styles from './CloseIcon.module.css';
import close from '../../assets/close.svg';

function CloseIcon(props) {
  const { handleCard } = props;
  return (
    <img src={close} alt="close" className={styles['close-icon']} onClick={() => handleCard()} />
  );
}

CloseIcon.propTypes = {
  handleCard: PropTypes.func.isRequired,
};

export default CloseIcon;
