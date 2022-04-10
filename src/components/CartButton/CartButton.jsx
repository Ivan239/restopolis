import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../redux/store/store';
import styles from './CartButton.module.css';

const CartButton = () => {
    const [amount, setAmount] = useState(store.getState().cart.length || 0);
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setAmount(store.getState().cart.length)
        })
        return unsubscribe
    }, [])

    return <NavLink to='/order' className={styles.link}>
        <div className={styles['cart-button']}>
            <h2 className={styles.text}>Cart | {amount}</h2>
        </div>
    </NavLink>
};

export default CartButton;