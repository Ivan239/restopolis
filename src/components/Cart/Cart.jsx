import { useEffect, useState } from 'react'
import store from '../../redux/store/store'
import CartItems from '../CartItems/CartItems'
import './Cart.css'

function Cart() {
    const [items, setItems] = useState(store.getState().cart)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setItems(store.getState().cart)
        })
        return unsubscribe
    }, [])
    const price = store.getState().cart.reduce((prev, current) => prev + current.price, 0)
    return <div className="cart">
        <h2 className='cart__name'>Your cart</h2>
        {items.length ? <div className='cart__items'>
            <CartItems dishes={items} />
        </div> : <h2 className='cart__sorry'>Sorry, you have nothing there</h2>}
        <div className='cart__value'>
            <h3 className='cart__total'>Total:</h3>
            <h3 className='cart__price'>${price.toFixed(2)}</h3>
        </div>
    </div >
}

export default Cart