import React from 'react';
import './Toppings.css'
import Topping from '../Topping/Topping';

const Toppings = (props) => {
    return <div className='toppings'>
        {props.toppings.map((elem) => <Topping key={elem.id} name = {elem.name} price = {elem.price} img = {elem.img} isSelected = {props.isSelected} />)}
    </div>;
};

export default Toppings;