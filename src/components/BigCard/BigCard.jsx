import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './BigCard.css';
import close from '../../assets/close.svg'

const BigCard = (props) => {
    const {
        img,
        name,
        price,
    } = props

    const handleBigCard = (e) => {
        e.stopPropagation();
    }

    return <div className='big-card'>
        <div className='big-card__content' onClick={(e) => handleBigCard(e)}>
            <img className='big-card__image' src={img} alt='pizza_image' />
            <div className='big-card__info'>
                <h1 className='big-card__name'>{name}</h1>
                <p className='big-card__description'>Куриные кусочки, сладкий перец, смесь сыров чеддер и пармезан, моцарелла, красный лук, соус сладкий чили, соус альфредо</p>
                <div className='big-card__button'>
                    <MenuButton>
                        <h3 className='big-card__price'>Add to cart for ${price}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
        <img src={close} alt='close' className='big-card__close'/>
    </div>;
};

export default BigCard;