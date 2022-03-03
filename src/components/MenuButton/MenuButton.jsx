import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => {
    return <button className="menu-button" type={props.type} onClick={props.onClick}>
        {props.children}
    </button>;
};

export default MenuButton;