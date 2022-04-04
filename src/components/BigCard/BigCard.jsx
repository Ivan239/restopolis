import React, { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './BigCard.css';
import Toppings from '../Toppings/Toppings';
import { addDish } from '../../redux/cart/actions';
import store from '../../redux/store/store';
import { addTopping, clearToppings, deleteTopping } from '../../redux/dish/actions';
import CloseIcon from '../CloseIcon/CloseIcon';
import { toast } from 'react-toastify';
import newId from '../newId';
import { CSSTransition } from 'react-transition-group'

const BigCard = (props) => {
    const {
        img,
        name,
        price,
        handleBigCard,
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
            console.log(store.getState().dish)
        }
    }

    return <div className='big-card'>
        <div className='big-card__content' onClick={(e) => propClosing(e)}>
            <CloseIcon handleCard={handleBigCard} />
            <div className='big-card__left'>
                <div className='big-card__size'>
                    <CSSTransition in={!big} timeout={0} classNames={'big-card-size'} >
                        <p className='big-card__small' onClick={() => toggleSize(false)}>Small</p>
                    </CSSTransition>
                    <CSSTransition in={big} timeout={0} classNames={'big-card-size'} >
                        <p className='big-card__big' onClick={() => toggleSize(true)}>Big</p>
                    </CSSTransition>
                </div>
                <CSSTransition in={big} timeout={0} classNames={'big-card-image'} >
                    <img className='big-card__image' src={img} alt='pizza_image' />
                </CSSTransition>
            </div>
            <div className='big-card__info'>
                <h1 className='big-card__name'>{name}</h1>
                <p className='big-card__description'>Chicken pieces, bell peppers, cheddar and parmesan cheese mix, mozzarella, red onion, sweet chili sauce, alfredo sauce</p>
                <Toppings isSelected={isSelected} />
                <div className='big-card__button'>
                    <MenuButton onClick={() => addToCart()}>
                        <h3 className='big-card__price'>Add to cart for ${fullPrice.toFixed(2)}</h3>
                    </MenuButton>
                </div>
            </div>
        </div>
    </div>;
};

export default BigCard;