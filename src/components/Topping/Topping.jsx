import React, { useEffect } from 'react';
import styles from './Topping.module.css';
import animation from './ToppingAnimation.module.css'
import { useState } from 'react';
import store from '../../redux/store/store';
import { addTopping, deleteTopping } from '../../redux/dish/actions';
import { CSSTransition } from 'react-transition-group'


const Topping = (props) => {
    const {
        img,
        name,
        price,
        isSelected,
    } = props

    const [chosenTopping, setChosenTopping] = useState(false);

    const handleTopping = () => {
        setChosenTopping(!chosenTopping)
        !chosenTopping ? store.dispatch(addTopping({
            id: name,
            name: name,
            price: price,
        })) : store.dispatch(deleteTopping(name))
    }

    useEffect(() => {
        setChosenTopping(false)
    }, [isSelected])

    return <CSSTransition in={chosenTopping} timeout={300} classNames={animation} >
        <div className={styles.topping} onClick={() => handleTopping()}>
            <img className={styles.image} src={img} alt={`${name}`} />
            <div className={styles.text}>
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <h4 className={styles.price}>${price}</h4>
                </div>
            </div>
        </div>
    </CSSTransition>;
};

export default Topping;