import React from 'react';
import './Topping.css'
import { useState } from 'react';


const Topping = (props) => {
    const {
        img,
        name,
        price,
    } = props

    const [chosenTopping, setChosenTopping] = useState(false);

    const handleTopping = () => {
        setChosenTopping(!chosenTopping)
    }

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