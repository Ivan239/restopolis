import './Order.css'
import currentDate from '../../components/currentDate'
import Cart from '../../components/Cart/Cart'
import { useForm } from 'react-hook-form'
import { getDatabase, ref, set } from "firebase/database";
import newId from '../../components/newId';
import store from '../../redux/store/store';
import { deleteCart } from '../../redux/cart/actions';

function Delivery() {
    let minDate = currentDate(2);
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const database = getDatabase();
    const onSubmit = (data) => {
        let userID = store.getState().account.uid
        if (!userID) {
            userID = 'non-auth'
        }
        data.cart = store.getState().cart
        set(ref(database, `/deliveries/${userID}/${newId()}`), data);
        store.dispatch(deleteCart())
        reset()
    };
    return <div className="delivery">
        <div className='delivery__cart'>
            <Cart />
        </div>
        <div className='delivery__fields'>
            <form className='delivery__form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className="delivery__title">Order delivery</h2>
                <p>Name</p>
                <input
                    className='delivery__input delivery__name'
                    placeholder='Ivan'
                    {...register("Name", { required: true })} />
                <p>Address</p>
                <input
                    className='delivery__input delivery__address'
                    placeholder='Innopolis, University st., 1/1, 209'
                    {...register("Address", { required: false })} />
                <p>Email</p>
                <input
                    type='email'
                    className='delivery__input delivery__email'
                    placeholder='example@website.com'
                    {...register("E-mail", { required: false })} />
                <p>Phone</p>
                <input
                    className='delivery__input delivery__phone'
                    placeholder='+79810001122'
                    {...register("Phone", { required: true })} />
                <p>Date</p>
                <input
                    type='datetime-local'
                    className='delivery__input delivery__date'
                    min={minDate}
                    {...register("Date", { required: true })} />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="type"
                        {...register("Restaurant", { required: false })}
                    />Pick up at restaurant
                </label>
                <br />
                <input type='submit' value='Confirm' className='delivery__submit' />
            </form>
        </div>
    </div >
}

export default Delivery