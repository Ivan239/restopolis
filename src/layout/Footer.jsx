import './Footer.css'

function Footer() {
    return <div className='footer'>
        <div className='footer__info'>
            <div className='footer__left'>
                <h3 className='footer_title'>Contacts:</h3>
                <p className='footer__element' id='phone'>+79810001122</p>
                <p className='footer__element' id='email'>contact@restopolis.ru</p>
            </div>

            <div className='footer__right'>
                <h3 className='footer_title'>Info:</h3>
                <p className='footer__element' id='address'>Innopolis, Universitetskaya st., 1/1</p>
                <p className='footer__element' id='feedback'>Leave feedback</p>
            </div>
        </div>
    </div>
}

export default Footer