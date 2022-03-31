import React from 'react';
import './Card.css';
import BigCard from '../BigCard/BigCard';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';

const Card = (props) => {
    const {
        img,
        name,
        price,
    } = props

    const [showBigCard, setShowBigCard] = useState(false);

    const handleBigCard = () => {
        setShowBigCard(!showBigCard)
    }

    return <div className='card' onClick={() => handleBigCard()}>
        <img className='card__image' src={img} alt={name} />
        <div className='card__text'>
            <div className='card__info'>
                <h3 className='card__name'>{name}</h3>
                <h4 className='card__price'>From ${price}</h4>
            </div>
            <div className='card__button'>
                <MenuButton>
                    <h3 className='card-button__text'>Take it</h3>
                </MenuButton>
            </div>
        </div>
        <div className={'card__big card__big-' + showBigCard}>
            <BigCard name={name} img={img} price={price} handleBigCard={handleBigCard}/>
        </div>
    </div>;
};

export default Card;