import React from 'react';
import './Toppings.css'
import Topping from '../Topping/Topping';
import pepperoni_t from '../../assets/pepperoni_t.png'
import chicken from '../../assets/chicken.png'
import bacon from '../../assets/bacon.png'
import champinons from '../../assets/champinons.png'
import jalapeno from '../../assets/jalapeno.png'
import mozzarella from '../../assets/mozzarella.png'

const toppings = [
    {
        name: 'Jalapeno',
        img: jalapeno,
        price: 0.49,
        id: 1,
    },
    {
        name: 'Mozzarella',
        img: mozzarella,
        price: 0.49,
        id: 2,
    },
    {
        name: 'Bacon',
        img: bacon,
        price: 0.49,
        id: 3,
    },
    {
        name: 'Chicken',
        img: chicken,
        price: 0.49,
        id: 4,
    },
    {
        name: 'Pepperoni',
        img: pepperoni_t,
        price: 0.49,
        id: 5,
    },
    {
        name: 'Champinons',
        img: champinons,
        price: 0.49,
        id: 6,
    },
]

const Toppings = (props) => {
    return <div className='toppings'>
        {toppings.map((elem) => <Topping key={elem.id} name = {elem.name} price = {elem.price} img = {elem.img} isSelected = {props.isSelected} />)}
    </div>;
};

export default Toppings;