import React from 'react';
import styles from './Toppings.module.css';
import Topping from '../Topping/Topping';
import { ToppingInt } from '../../interfaces';

type ToppingsType = {
  toppings?: Array<ToppingInt>;
  isSelected?: boolean;
};

function Toppings({ toppings, isSelected }: ToppingsType) {
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

Toppings.defaultProps = {
  toppings: [],
  isSelected: false,
};

export default Toppings;
