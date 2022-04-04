import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const {
        img,
        name,
        price,
        toppings,
    } = props

    const size = () => {
        for (let i = 0; i < toppings.length; i++) {
            if (toppings[i].id === 'Small' || toppings[i].id === 'Big') {
                return toppings[i].id
            }
        }
    }

    return <div className='cart-item'>
        <img className='cart-item__image' src={img} alt={name} />
        <div className='cart-item__content'>
            <h3 className='cart-item__name'>{name} &mdash; {size()}</h3>
            <div className='cart-item__toppings'>
                {toppings ? toppings.map((topping) => {
                    return (topping.id !== 'Small' && topping.id !== 'Big') ?
                        <p key={topping.id} className='cart-item__topping'>+ {topping.name}</p> : null
                }) : null}
            </div>
            <h4 className='cart-item__price'>${price.toFixed(2)}</h4>
        </div>
    </div>;
};

export default CartItem;