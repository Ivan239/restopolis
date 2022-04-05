import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../../redux/store/store';
import './CartButton.css';

const CartButton = () => {
    const [amount, setAmount] = useState(store.getState().cart.length || 0);
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setAmount(store.getState().cart.length)
        })
        return unsubscribe
    }, [])

    return <NavLink to='/order' className='cart-button__link'>
        <div className='cart-button'>
            <h2 className='cart-button__text'>Cart | {amount}</h2>
        </div>
    </NavLink>
};

export default CartButton;