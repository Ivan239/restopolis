import React from 'react';
import './Card.css';
import BigCard from '../BigCard/BigCard';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import store from '../../redux/store/store';
import { clearToppings } from '../../redux/dish/actions';
import { CSSTransition } from 'react-transition-group'

const Card = (props) => {
    const {
        img,
        name,
        price,
        description,
    } = props

    const [showBigCard, setShowBigCard] = useState(false);

    const handleBigCard = () => {
        setShowBigCard(!showBigCard)
        store.dispatch(clearToppings())
    }

    return <div className='card' onClick={() => handleBigCard()}>
        <img className='card__image' src={img} alt={name} />
        <div className='card__text'>
            <div className='card__info'>
                <h3 className='card__name'>{name}</h3>
                <h4 className='card__price'>From ${price.toFixed(2)}</h4>
            </div>
            <div className='card__button'>
                <MenuButton>
                    <h3 className='card-button__text'>Take it</h3>
                </MenuButton>
            </div>
        </div>
        <CSSTransition in={showBigCard} timeout={300} classNames={'card__big'} unmountOnExit >
            <BigCard
                name={name}
                img={img}
                price={price}
                handleBigCard={handleBigCard}
                description={description}
            />
        </CSSTransition>
    </div>;
};

export default Card;