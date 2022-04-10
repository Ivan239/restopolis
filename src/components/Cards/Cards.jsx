import React from 'react';
import Card from '../Card/Card'
import styles from './Cards.module.css';

const Cards = (props) => {
    const {
        dishes,
        toppings,
    } = props
    return <div className={styles.cards}>
        {dishes.map((elem) =>
            <Card
                key={elem.id}
                name={elem.name}
                price={elem.price}
                img={elem.img}
                description={elem.description}
                toppings={toppings}
            />)}
    </div>;
};

export default Cards;