import './Delivery.css'
import currentDate from '../../components/currentDate'
import Cart from '../../components/Cart/Cart'
import { useForm } from 'react-hook-form'

function Delivery() {
    let minDate = currentDate(2);
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return <div className="delivery">
        <div className='delivery__cart'>
            <Cart />
        </div>
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
                {...register("Address", { required: true })} />
            <p>Email</p>
            <input
                type='email'
                className='delivery__input delivery__email'
                placeholder='example@website.com'
                {...register("E-mail", { required: true })} />
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
            <input type='submit' value='Confirm' className='delivery__submit' />
        </form>
    </div >
}

export default Delivery