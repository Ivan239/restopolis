import React, { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './BigCard.css';
import close from '../../assets/close.svg'
import Toppings from '../Toppings/Toppings';
import { addDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';
import { clearToppings } from '../../redux/dish/actions';

const BigCard = (props) => {
    const {
        img,
        name,
        price,
    } = props

    const handleBigCard = (e) => {
        e.stopPropagation();
    }

    const newId = () => Math.floor((1 + Math.random()) * 0x10000000)
        .toString(16)

    const addToCart = () => {
        store.dispatch(addDish({
            img: img,
            name: name,
            price: fullPrice,
            id: newId(),
        }))
        store.dispatch(clearToppings())
    }

    const [fullPrice, setFullPrice] = useState(price)
    store.subscribe(() => {
        const addPrice = store.getState().dish.reduce((prev, current) => prev + current.price, 0)
        setFullPrice(price + addPrice)
    })

    return <div className='big-card'>
        <div className='big-card__content' onClick={(e) => handleBigCard(e)}>
            <img className='big-card__image' src={img} alt='pizza_image' />
            <div className='big-card__info'>
                <h1 className='big-card__name'>{name}</h1>
                <p className='big-card__description'>Chicken pieces, bell peppers, cheddar and parmesan cheese mix, mozzarella, red onion, sweet chili sauce, alfredo sauce</p>
                <Toppings />
                <div className='big-card__button'>
                    <MenuButton onClick={() => addToCart()}>
                        <h3 className='big-card__price'>Add to cart for ${fullPrice}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
        {/*<img src={close} alt='close' className='big-card__close' />*/}
    </div>;
};

export default BigCard;