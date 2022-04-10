import React from 'react';
import styles from './MenuButton.module.css';

const MenuButton = (props) => {
    return <button className={styles['menu-button']} type={props.type} onClick={props.onClick}>
        {props.children}
    </button>;
};

export default MenuButton;