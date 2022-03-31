import { useState } from 'react'
import store from '../../redux/store/store'
import './CartPage.css'

function CartPage() {
    const [items, setItems] = useState(store.getState().cart || [])

    store.subscribe(() => {
        setItems(store.getState().cart)
        console.log(items)
    })
    return <div className="cart">
        {items.map((el) => <div key={el.key}>{el.name}</div>)}
    </div >
}

export default CartPage