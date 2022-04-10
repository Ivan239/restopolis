import React from 'react';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return <button className={styles.button} type={props.type} onClick={props.onClick}>
        <h2>{props.children}</h2>
    </button>;
};

export default HeaderButton;