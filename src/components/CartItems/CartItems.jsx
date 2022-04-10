import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';
import styles from './CartItems.module.css';

function CartItems(props) {
  const {
    dishes,
    isDeletable,
  } = props;
  return (
    <div className={styles['cart-items']}>
      {dishes.map((elem) => (
        <CartItem
          key={elem.id}
          name={elem.name}
          price={elem.price}
          img={elem.img}
          toppings={elem.toppings}
          isDeletable={isDeletable}
          id={elem.id}
        />
      ))}
    </div>
  );
}

CartItems.propTypes = {
  dishes: PropTypes.array,
  isDeletable: PropTypes.bool,
};

CartItems.defaultProps = {
  dishes: [],
  isDeletable: false,
};

export default CartItems;
