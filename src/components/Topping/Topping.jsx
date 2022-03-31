import React, { useEffect } from 'react';
import './Topping.css'
import { useState } from 'react';
import store from '../../redux/store/store';
import { addTopping, deleteTopping } from '../../redux/dish/actions';


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

    return <div className={'topping-' + chosenTopping} onClick={() => handleTopping()}>
        <img className='topping__image' src={img} alt={`${name}`} />
        <div className='topping__text'>
            <div className='topping__info'>
                <h3 className='topping__name'>{name}</h3>
                <h4 className='topping__price'>${price}</h4>
            </div>
        </div>
    </div>;
};

export default Topping;