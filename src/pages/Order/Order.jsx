import './Order.css'
import currentDate from '../../components/currentDate'
import Cart from '../../components/Cart/Cart'
import { useForm } from 'react-hook-form'
import { getDatabase, ref, set } from "firebase/database";
import newId from '../../components/newId';
import store from '../../redux/store/store';
import { deleteCart } from '../../redux/cart/actions';
import { toast } from 'react-toastify'
import { addOrder } from '../../redux/account/actions';

function Delivery() {
    let minDate = currentDate(2);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const database = getDatabase();
    const onSubmit = (data) => {
        if (store.getState().cart.length) {
            let userID = store.getState().account.uid
            if (!userID) {
                userID = 'non-auth'
            }
            data.cart = store.getState().cart
            set(ref(database, `/deliveries/${userID}/${newId()}`), data);
            store.dispatch(deleteCart())
            store.dispatch(addOrder(data))
            reset()
            toast.success(`Order is processed`, {
                autoClose: 2400
            })
        } else {
            toast.error(`Your cart is empty`, {
                autoClose: 2400
            })
        }
    };
    const toastError = (field) => {
        toast.error(`${field} is required`, {
            autoClose: 2400
        })
    }
    const checkErrors = (errors) => {
        return errors.Name ? toastError('Name') :
            errors.Phone ? toastError('Phone') :
                errors.Date ? toastError('Date') : null
    }
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
                    id='Name'
                    aria-invalid={errors.Name ? "true" : "false"}
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
                    {...register("Email", { required: false })} />
                <p>Phone</p>
                <input
                    className='delivery__input delivery__phone'
                    placeholder='+79810001122'
                    id='Phone'
                    type='tel'
                    minLength="10"
                    aria-invalid={errors.Phone ? "true" : "false"}
                    {...register("Phone", { required: true })} />
                <p>Date</p>
                <input
                    type='datetime-local'
                    className='delivery__input delivery__date'
                    min={minDate}
                    id='Date'
                    aria-invalid={errors.Date ? "true" : "false"}
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
                <input type='submit' value='Confirm' className='delivery__submit' onClick={() => checkErrors(errors)}/>
            </form>
        </div>
    </div >
}

export default Delivery