import './Book.css'
import currentDate from '../../components/currentDate'
import { useForm } from 'react-hook-form'

function Book() {
    let minDate = currentDate(4);
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return <div className="book">
        <form className='book__form' onSubmit={handleSubmit(onSubmit)}>
            <h2 className="book__title">Table booking</h2>
            <p>Name</p>
            <input
                className='book__input book__name'
                placeholder='Ivan'
                {...register("Name", { required: true })} />
            <p>Email</p>
            <input
                type='email'
                className='book__input book__email'
                placeholder='example@website.com'
                {...register("E-mail", { required: true })} />
            <p>Phone</p>
            <input
                className='book__input book__phone'
                placeholder='+79810001122'
                {...register("Phone", { required: true })} />
            <p>Date</p>
            <input
                type='datetime-local'
                className='book__input book__date'
                min={minDate}
                {...register("Date", { required: true })} />
            <p>Amount of people</p>
            <input
                type='number'
                placeholder='0'
                min='1'
                max='40'
                className='book__input book__date'
                {...register("Amount", { required: true })} />
            <br />
            <input type='submit' value='Book' className='book__submit' />
        </form>
    </div >
}

export default Book