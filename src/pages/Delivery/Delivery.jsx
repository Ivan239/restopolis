import './Delivery.css'
import currentDate from '../../components/currentDate'
import Cart from '../../components/Cart/Cart'

function Delivery() {
    let minDate = currentDate(2);

    return <div className="delivery">
        <form className='delivery__form'>
            <h2 className="delivery__title">Order delivery</h2>
            <p>Name</p>
            <input className='delivery__input delivery__name' />
            <p>Address</p>
            <input className='delivery__input delivery__address' />
            <p>Email</p>
            <input type='email' className='delivery__input delivery__email' />
            <p>Phone</p>
            <input className='delivery__input delivery__phone' />
            <p>Date</p>
            <input type='datetime-local' className='delivery__input delivery__date' min={minDate}/>
            <br />
            <input type='submit' value='Confirm' className='delivery__submit' />
        </form>
        <div className='delivery__cart'>
            <Cart/>
        </div>
    </div >
}

export default Delivery