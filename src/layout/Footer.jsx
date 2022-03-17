import './Footer.css'
import Feedback from '../components/Feedback/Feedback'
import { useState } from 'react';

function Footer() {

    const [showFeedback, setShowFeedback] = useState(false);

    const handleFeedback = () => {
        setShowFeedback(!showFeedback)
    }

    return <div className='footer'>
        <div className='footer__info'>
            <div className='footer__left'>
                <h3 className='footer_title'>Contacts:</h3>
                <p className='footer__element' id='footer__phone'>+79810001122</p>
                <p className='footer__element' id='footer__email'>contact@restopolis.ru</p>
            </div>

            <div className='footer__right'>
                <h3 className='footer_title'>Info:</h3>
                <p className='footer__element' id='footer__address'>Innopolis, Universitetskaya st., 1/1</p>
                <p className='footer__element' id='footer__feedback' onClick={() => handleFeedback()}>Leave feedback</p>
                <div className={'footer__feedback-' + showFeedback} onClick={() => handleFeedback()}>
                    <Feedback />
                </div>
            </div>
        </div>
    </div>
}

export default Footer