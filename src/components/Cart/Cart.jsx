import React, { useEffect, useState } from 'react';
import store from '../../redux/store/store';
import CartItems from '../CartItems/CartItems';
import styles from './Cart.module.css';

function Cart() {
  const [items, setItems] = useState(store.getState().cart);
  useEffect(
    () =>
      store.subscribe(() => {
        setItems(store.getState().cart);
      }),
    [],
  );
  const price = store.getState().cart.reduce((prev, current) => prev + current.price, 0);
  return (
    <div className={styles.cart}>
      <h2 className={styles.name}>Your cart</h2>
      {items.length ? (
        <div className={styles.items}>
          <CartItems dishes={items} isDeletable />
        </div>
      ) : (
        <h2 className={styles.sorry}>Sorry, you have nothing here</h2>
      )}
      <div className={styles.value}>
        <h3 className={styles.total}>Total:</h3>
        <h3 className={styles.price}>${price.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
