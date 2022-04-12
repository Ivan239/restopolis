import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import styles from './Topping.module.css';
import animation from './ToppingAnimation.module.css';
import store from '../../redux/store/store';
import {addTopping, deleteTopping} from '../../redux/dish/actions';

function Topping(props) {
  const {img, name, price, isSelected} = props;

  const [chosenTopping, setChosenTopping] = useState(false);

  const handleTopping = () => {
    setChosenTopping(!chosenTopping);
    if (!chosenTopping) {
      store.dispatch(
        addTopping({
          id: name,
          name,
          price,
        })
      );
    } else {
      store.dispatch(deleteTopping(name));
    }
  };

  useEffect(() => {
    setChosenTopping(false);
  }, [isSelected]);

  return (
    <CSSTransition in={chosenTopping} timeout={300} classNames={animation}>
      <div className={styles.topping} onClick={() => handleTopping()}>
        <img className={styles.image} src={img} alt={`${name}`} />
        <div className={styles.text}>
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.price}>${price}</h4>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

Topping.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  isSelected: PropTypes.bool,
};

Topping.defaultProps = {
  img: '',
  name: '',
  price: 0,
  isSelected: false,
};

export default Topping;
