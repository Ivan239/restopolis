import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './BigCard.css';
import close from '../../assets/close.svg'
import Toppings from '../Toppings/Toppings';

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
                <p className='big-card__description'>Chicken pieces, bell peppers, cheddar and parmesan cheese mix, mozzarella, red onion, sweet chili sauce, alfredo sauce</p>
                <Toppings />
                <div className='big-card__button'>
                    <MenuButton onClick={() => console.log({
                        name: name,
                        price: price,
                    })}>
                        <h3 className='big-card__price'>Add to cart for ${price}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
        <img src={close} alt='close' className='big-card__close' />
    </div>;
};

export default BigCard;