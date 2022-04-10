import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toppings.module.css';
import Topping from '../Topping/Topping';

function Toppings(props) {
  const {
    toppings,
    isSelected,
  } = props;
  return (
    <div className={styles.toppings}>
      {toppings.map((elem) => (
        <Topping
          key={elem.id}
          name={elem.name}
          price={elem.price}
          img={elem.img}
          isSelected={isSelected}
        />
      ))}
    </div>
  );
}

Toppings.propTypes = {
  toppings: PropTypes.arrayOf(PropTypes.object),
  isSelected: PropTypes.bool,
};

Toppings.defaultProps = {
  toppings: {},
  isSelected: false,
};

export default Toppings;
