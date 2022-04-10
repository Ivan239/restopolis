import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './CartItems.module.css';

const CartItems = (props) => {
    const {
        dishes,
        isDeletable,
    } = props
    return <div className={styles['cart-items']}>
        {dishes.map((elem) =>
            <CartItem
                key={elem.id}
                name={elem.name}
                price={elem.price}
                img={elem.img}
                toppings={elem.toppings}
                isDeletable={isDeletable}
                id={elem.id}
            />)}
    </div>;
};

export default CartItems;