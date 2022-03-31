import store from '../../redux/store/store'
import CartItems from '../CartItems/CartItems'
import './Cart.css'

function Cart() {
    const items = store.getState().cart
    const price = store.getState().cart.reduce((prev, current) => prev + current.price, 0)
    return <div className="cart">
        <h2 className='cart__name'>Your cart</h2>
        <CartItems dishes={items} />
        <div className='cart__value'>
            <h3 className='cart__total'>Total:</h3>
            <h3 className='cart__price'>${price}</h3>
        </div>
    </div >
}

export default Cart