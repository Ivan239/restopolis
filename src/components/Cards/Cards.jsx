import React from 'react';
import Card from '../Card/Card'
import './Cards.css';

const Cards = (props) => {
    const {
        dishes,
    } = props
    return <div className='cards'>
        {dishes.map((elem) => <Card key={elem.id} name = {elem.name} price = {elem.price} img = {elem.img} />)}
    </div>;
};

export default Cards;