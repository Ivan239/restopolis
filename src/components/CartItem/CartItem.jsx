import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.css';
import close from '../../assets/close.svg';
import { deleteDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';

function CartItem(props) {
  const { img, name, price, toppings, isDeletable, id } = props;

  const size = () => {
    if (toppings) {
      for (const elem of toppings) {
        if (elem.id === 'Small' || elem.id === 'Big') {
          return elem.id;
        }
      }
    }
    return 'Small';
  };

  const deleteItem = () => {
    store.dispatch(deleteDish(id));
  };

  return (
    <div className={styles['cart-item']}>
      {isDeletable ? (
        <img src={close} alt="delete" className={styles.delete} onClick={() => deleteItem()} />
      ) : null}
      <img className={styles.image} src={img} alt={name} />
      <div className={styles.content}>
        <h3 className={styles.name}>
          {name} &mdash; {size() || 'Small'}
        </h3>
        <div className={styles.toppings}>
          {toppings
            ? toppings.map((topping) =>
                topping.id !== 'Small' && topping.id !== 'Big' ? (
                  <p key={topping.id} className={styles.topping}>
                    +{topping.name}
                  </p>
                ) : null,
              )
            : null}
        </div>
        <h4 className={styles.price}>${price.toFixed(2)}</h4>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  toppings: PropTypes.arrayOf(PropTypes.object),
  isDeletable: PropTypes.bool,
  id: PropTypes.string,
};

CartItem.defaultProps = {
  img: '',
  name: '',
  price: 0,
  toppings: {},
  isDeletable: false,
  id: '0',
};

export default CartItem;
