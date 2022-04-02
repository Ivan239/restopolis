import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartItems.css';

const CartItems = (props) => {
    const {
        dishes,
    } = props
    return <div className='cart-items'>
        {dishes.map((elem) => <CartItem key={elem.id} name={elem.name} price={elem.price} img={elem.img} toppings={elem.toppings}/>)}
    </div>;
};

export default CartItems;