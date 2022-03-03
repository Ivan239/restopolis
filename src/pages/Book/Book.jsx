import './Book.css'
import currentDate from '../../components/currentDate'

function Book() {
    let minDate = currentDate(4);

    return <div className="book">
        <form className='book__form'>
            <h2 className="book__title">Table booking</h2>
            <p>Name</p>
            <input className='book__input book__name' />
            <p>Email</p>
            <input type='email' className='book__input book__email' />
            <p>Phone</p>
            <input className='book__input book__phone' />
            <p>Date</p>
            <input type='datetime-local' className='book__input book__date' min={minDate}/>
            <p>Amount of people</p>
            <input type='number' min='0' max='40' className='book__input book__date' />
            <br />
            <input type='submit' value='Book' className='book__submit' />
        </form>
    </div >
}

export default Book