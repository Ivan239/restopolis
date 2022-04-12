import React from 'react';
import styles from './Toppings.module.css';
import Topping from '../Topping/Topping';

type ToppingsType = {
  toppings?: Array<{ id: string; name: string; price: number; img: string }>;
  isSelected?: boolean;
};

const Toppings: React.FC<ToppingsType> = ({ toppings, isSelected }) => (
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

Toppings.defaultProps = {
  toppings: [],
  isSelected: false,
};

export default Toppings;
