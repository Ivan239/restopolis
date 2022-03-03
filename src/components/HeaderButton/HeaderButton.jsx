import React from 'react';
import './HeaderButton.css';

const HeaderButton = (props) => {
    return <button className="header__button" type={props.type} onClick={props.onClick}>
        <h2>{props.children}</h2>
    </button>;
};

export default HeaderButton;