import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const {
        img,
        name,
        price,
        toppings,
    } = props

    return <div className='cart-item'>
        <img className='cart-item__image' src={img} alt={name} />
        <div className='cart-item__content'>
            <h3 className='cart-item__name'>{name}</h3>
            <div className='cart-item__toppings'>
                {toppings ? toppings.map((topping) =>
                    <p key={topping.id} className='cart-item__topping'>+ {topping.name}</p>) : null}
            </div>
            <h4 className='cart-item__price'>${price.toFixed(2)}</h4>
        </div>
    </div>;
};

export default CartItem;