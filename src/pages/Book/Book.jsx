import './Book.css'
import currentDate from '../../components/currentDate'
import { useForm } from 'react-hook-form'
import { getDatabase, ref, set } from "firebase/database";
import newId from '../../components/newId';
import store from '../../redux/store/store';
import { toast } from 'react-toastify'
import { addBooking } from '../../redux/account/actions';

function Book() {
    let minDate = currentDate(4);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const database = getDatabase();
    const onSubmit = (data) => {
        let userID = store.getState().account.uid
        if (!userID) {
            userID = 'non-auth'
        }
        set(ref(database, `/bookings/${userID}/${newId()}`), data);
        reset()
        store.dispatch(addBooking(data))
        console.log(store.getState().account)
        toast.success(`Table reserved`, {
            autoClose: 2400
        })
    };
    const toastError = (field) => {
        toast.error(`${field} is required`, {
            autoClose: 2400
        })
    }
    const checkErrors = (errors) => {
        return errors.Name ? toastError('Name') :
            errors.Email ? toastError('E-mail') :
                errors.Phone ? toastError('Phone') :
                    errors.Date ? toastError('Date') :
                        errors.Amount ? toastError('Amount') : null
    }
    return <div className="book">
        <form className='book__form' onSubmit={handleSubmit(onSubmit)}>
            <h2 className="book__title">Table booking</h2>
            <p>Name</p>
            <input
                className='book__input book__name'
                placeholder='Ivan'
                id='Name'
                aria-invalid={errors.Name ? "true" : "false"}
                {...register("Name", { required: true })} />
            <p>Email</p>
            <input
                type='email'
                className='book__input book__email'
                placeholder='example@website.com'
                id='Email'
                aria-invalid={errors.Email ? "true" : "false"}
                {...register("Email", { required: true })} />
            <p>Phone</p>
            <input
                className='book__input book__phone'
                placeholder='+79810001122'
                id='Phone'
                aria-invalid={errors.Phone ? "true" : "false"}
                {...register("Phone", { required: true })} />
            <p>Date</p>
            <input
                type='datetime-local'
                className='book__input book__date'
                min={minDate}
                id='Date'
                aria-invalid={errors.Date ? "true" : "false"}
                {...register("Date", { required: true })} />
            <p>Amount of people</p>
            <input
                type='number'
                placeholder='0'
                min='1'
                max='40'
                className='book__input book__date'
                id='Amount'
                aria-invalid={errors.Amount ? "true" : "false"}
                {...register("Amount", { required: true })} />
            <br />
            <input type='submit' value='Book' className='book__submit' onClick={() => checkErrors(errors)} />
        </form>
    </div >
}

export default Book