import store from '../../redux/store/store'
import CartItems from '../CartItems/CartItems'
import './Orders.css'
import React, { useEffect, useState } from 'react';

const Orders = () => {
    let price = 0;
    const [orders, setOrders] = useState(store.getState().account.orders)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newOrders = store.getState().account.orders
            if (newOrders) {
                newOrders.sort((a, b) => {
                    if (a.Date < b.Date) {
                        return 1;
                    }
                    if (a.Date > b.Date) {
                        return -1;
                    }
                    return 0;
                })
            }
            setOrders(newOrders)
        })
        return unsubscribe
    }, [])
    return <div className="orders">
        <h3 className='orders__name'>Last order</h3>
        {orders && orders.length ? <div className='orders__items'>
            <CartItems dishes={orders[0].cart} />
        </div> : <h2 className='orders__sorry'>Sorry, you have nothing here</h2>}
        <div className='orders__value'>
            <h3 className='orders__total'>Total:</h3>
            <h3 className='orders__price'>${price.toFixed(2)}</h3>
        </div>
    </div >
}
export default Orders