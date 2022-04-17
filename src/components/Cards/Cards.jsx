import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards(props) {
  const { dishes, toppings } = props;
  return (
    <div className={styles.cards}>
      {dishes.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          price={elem.price}
          img={elem.img}
          description={elem.description}
          toppings={toppings}
        />
      ))}
    </div>
  );
}

Cards.propTypes = {
  dishes: PropTypes.array,
  toppings: PropTypes.arrayOf(PropTypes.object),
};

Cards.defaultProps = {
  dishes: [],
  toppings: [],
};

export default Cards;
