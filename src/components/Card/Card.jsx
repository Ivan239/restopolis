import React from 'react';
import styles from './Card.module.css';
import BigCard from '../BigCard/BigCard';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import store from '../../redux/store/store';
import { clearToppings } from '../../redux/dish/actions';
import { CSSTransition } from 'react-transition-group'
import animation from './BigCardAnimation.module.css'

const Card = (props) => {
    const {
        img,
        name,
        price,
        description,
        toppings
    } = props

    const [showBigCard, setShowBigCard] = useState(false);

    const handleBigCard = () => {
        setShowBigCard(!showBigCard)
        store.dispatch(clearToppings())
    }

    return <div className={styles.card} onClick={() => handleBigCard()}>
        <img className={styles.image} src={img} alt={name} />
        <div className={styles.text}>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <h4 className={styles.price}>From ${price.toFixed(2)}</h4>
            </div>
            <div className={styles.button}>
                <MenuButton>
                    <h3 className={styles['button-text']}>Take it</h3>
                </MenuButton>
            </div>
        </div>
        <CSSTransition in={showBigCard} timeout={300} classNames={animation} unmountOnExit >
            <BigCard
                name={name}
                img={img}
                price={price}
                handleBigCard={handleBigCard}
                description={description}
                toppings={toppings}
            />
        </CSSTransition>
    </div>;
};

export default Card;