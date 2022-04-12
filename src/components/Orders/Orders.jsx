import React, {useEffect, useState} from 'react';
import store from '../../redux/store/store';
import CartItems from '../CartItems/CartItems';
import styles from './Orders.module.css';

function Orders() {
  const [orders, setOrders] = useState(store.getState().account.orders);
  useEffect(
    () =>
      store.subscribe(() => {
        setOrders(store.getState().account.orders);
      }),
    []
  );
  const newOrders = orders;
  let price = 0;
  if (newOrders && orders[0]) {
    newOrders.sort((a, b) => {
      if (a.Date < b.Date) {
        return 1;
      }
      if (a.Date > b.Date) {
        return -1;
      }
      return 0;
    });
    price = newOrders[0].cart.reduce((prev, current) => prev + current.price, 0);
  }
  return (
    <div className={styles.orders}>
      <h3 className={styles.name}>Last order</h3>
      {orders && orders.length ? (
        <div className={styles.items}>
          <CartItems dishes={newOrders[0].cart} isDeletable={false} />
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
export default Orders;
