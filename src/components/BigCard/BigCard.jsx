import React, { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import styles from './BigCard.module.css';
import Toppings from '../Toppings/Toppings';
import { addDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';
import { addTopping, clearToppings, deleteTopping } from '../../redux/dish/actions';
import CloseIcon from '../CloseIcon/CloseIcon';
import { toast } from 'react-toastify';
import newId from '../newId';
import { CSSTransition } from 'react-transition-group'
import sizeAnimation from './SizeAnimation.module.css'
import pizzaAnimation from './PizzaAnimation.module.css'

const BigCard = (props) => {
    const {
        img,
        name,
        price,
        handleBigCard,
        description,
        toppings
    } = props

    const propClosing = (e) => {
        e.stopPropagation();
    }

    const [isSelected, setIsSelected] = useState(() => {
        store.dispatch(addTopping({
            id: 'Small',
            name: 'Small',
            price: 0,
        }))
        return false
    })
    const [big, setBig] = useState(false)

    const addToCart = () => {
        toast.info(`You added "${name}" to cart`, {
            autoClose: 2300
        })
        setIsSelected(!isSelected)
        store.dispatch(addDish({
            img: img,
            name: name,
            price: fullPrice,
            toppings: store.getState().dish,
            id: newId(),
            big: big,
        }))
        store.dispatch(clearToppings())
        setBig(false)
        handleBigCard()
    }

    const [fullPrice, setFullPrice] = useState(price)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const addPrice = store.getState().dish.reduce((prev, current) => prev + current.price, 0)
            setFullPrice(price + addPrice)
        })
        return unsubscribe
    }, [price])

    const toggleSize = (size) => {
        if (size !== big) {
            setBig(size)
            store.dispatch(addTopping({
                id: !big ? 'Big' : 'Small',
                name: !big ? 'Big' : 'Small',
                price: !big ? 4 : 0,
            }))
            store.dispatch(deleteTopping(!big ? 'Small' : 'Big'))
        }
    }

    return <div className={styles['big-card']}>
        <div className={styles.content} onClick={(e) => propClosing(e)}>
            <CloseIcon handleCard={handleBigCard} />
            <div className={styles.left}>
                <div className={styles.size}>
                    <CSSTransition in={!big} timeout={50} classNames={sizeAnimation} >
                        <p className={styles.small} onClick={() => toggleSize(false)}>Small</p>
                    </CSSTransition>
                    <CSSTransition in={big} timeout={50} classNames={sizeAnimation} >
                        <p className={styles.big} onClick={() => toggleSize(true)}>Big</p>
                    </CSSTransition>
                </div>
                <CSSTransition in={big} timeout={50} classNames={pizzaAnimation} >
                    <img className={styles.image} src={img} alt='pizza_image' />
                </CSSTransition>
            </div>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.description}>{description}</p>
                <Toppings isSelected={isSelected} toppings={toppings}/>
                <div className={styles.button}>
                    <MenuButton onClick={() => addToCart()}>
                        <h3 className={styles.price}>Add to cart for ${fullPrice.toFixed(2)}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
    </div>;
};

export default BigCard;