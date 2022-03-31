import React from 'react';
import './CloseIcon.css';
import close from '../../assets/close.svg'

const CloseIcon = (props) => {
    return <img src={close} alt='close' className='close-icon' onClick={(e) => props.handleCard()}/>;
};

export default CloseIcon;