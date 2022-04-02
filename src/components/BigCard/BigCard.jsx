import React, { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './BigCard.css';
import Toppings from '../Toppings/Toppings';
import { addDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';
import { clearToppings } from '../../redux/dish/actions';
import CloseIcon from '../CloseIcon/CloseIcon';
import newId from '../newId';

const BigCard = (props) => {
    const {
        img,
        name,
        price,
        handleBigCard,
    } = props
    
    const propClosing = (e) => {
        e.stopPropagation();
    }

    const [isSelected, setIsSelected] = useState(true)

    const addToCart = () => {
        setIsSelected(!isSelected)
        store.dispatch(addDish({
            img: img,
            name: name,
            price: fullPrice,
            toppings: store.getState().dish,
            id: newId(),
        }))
        store.dispatch(clearToppings())
        handleBigCard()
    }

    const [fullPrice, setFullPrice] = useState(price)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const addPrice = store.getState().dish.reduce((prev, current) => prev + current.price, 0)
            setFullPrice(price + addPrice)
        })
        return unsubscribe
    }, [price])


    return <div className='big-card'>
        <div className='big-card__content' onClick={(e) => propClosing(e)}>
            <CloseIcon handleCard={handleBigCard} />
            <img className='big-card__image' src={img} alt='pizza_image' />
            <div className='big-card__info'>
                <h1 className='big-card__name'>{name}</h1>
                <p className='big-card__description'>Chicken pieces, bell peppers, cheddar and parmesan cheese mix, mozzarella, red onion, sweet chili sauce, alfredo sauce</p>
                <Toppings isSelected={isSelected} />
                <div className='big-card__button'>
                    <MenuButton onClick={() => addToCart()}>
                        <h3 className='big-card__price'>Add to cart for ${fullPrice.toFixed(2)}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
    </div>;
};

export default BigCard;