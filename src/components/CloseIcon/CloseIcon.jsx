import React from 'react';
import styles from './CloseIcon.module.css';
import close from '../../assets/close.svg'

const CloseIcon = (props) => {
    return <img src={close} alt='close' className={styles['close-icon']} onClick={(e) => props.handleCard()}/>;
};

export default CloseIcon;