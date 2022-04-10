import React from 'react';
import styles from './CartItem.module.css';
import close from '../../assets/close.svg'
import { deleteDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';

const CartItem = (props) => {
    const {
        img,
        name,
        price,
        toppings,
        isDeletable,
        id
    } = props

    const size = () => {
        if (toppings) {
            for (let i = 0; i < toppings.length; i++) {
                if (toppings[i].id === 'Small' || toppings[i].id === 'Big') {
                    return toppings[i].id
                }
            }
        }
    }

    const deleteItem = () => {
        store.dispatch(deleteDish(id))
    }

    return <div className={styles['cart-item']}>
        {isDeletable ? <img src={close} alt='delete' className={styles.delete} onClick={() => deleteItem()}/> : null}
        <img className={styles.image} src={img} alt={name} />
        <div className={styles.content}>
            <h3 className={styles.name}>{name} &mdash; {size() || 'Small'}</h3>
            <div className={styles.toppings}>
                {toppings ? toppings.map((topping) => {
                    return (topping.id !== 'Small' && topping.id !== 'Big') ?
                        <p key={topping.id} className={styles.topping}>+ {topping.name}</p> : null
                }) : null}
            </div>
            <h4 className={styles.price}>${price.toFixed(2)}</h4>
        </div>
    </div>;
};

export default CartItem;