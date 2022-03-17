import React from 'react';
import './Feedback.css';
import close from '../../assets/close.svg'

const Feedback = () => {

    const handleFeedback = (e) => {
        e.stopPropagation();
    }

    return <div className='feedback'>
        <div className='feedback__content' onClick={(e) => handleFeedback(e)}>
            
        </div>
        <img src={close} alt='close' className='feedback__close' />
    </div>;
};

export default Feedback;