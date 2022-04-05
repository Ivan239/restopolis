import MenuButton from '../MenuButton/MenuButton'
import './Registration.css'
import google from '../../assets/google.jpg'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import back from '../../assets/back.png'

function Registration(props) {
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{8,}$/i
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const toastError = (field) => {
        toast.error(`${field} is required`, {
            autoClose: 2400
        })
    }
    const passwordText = 'The password must contain at least 1 letter and 1 number, and be longer than 8 and not shorter than 32 characters.'
    const passwordError = () => {
        toast.error(passwordText, {
            autoClose: 9000
        })
    }
    const onSubmit = (data) => {
        console.log(data.Password)
        if (passwordPattern.test(data.Password)) {
            props.register(data.Email, data.Password, data.Name)
        } else {
            passwordError()
        }
    };
    const checkErrors = (errors) => {
        return errors.Name ? toastError('Name') :
            errors.Email ? toastError('E-mail') : null
    }
    return <div className="reg">
        <img src={back} alt='back' className='reg__back' onClick={() => props.setRegForm(false)}/>
        <form className='reg__form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <p>Name:</p>
            <input
                placeholder='Ivan Ivanov'
                className='reg__field'
                id='Name'
                aria-invalid={errors.Name ? "true" : "false"}
                {...register("Name", { required: true })} 
            />
            <p>E-mail:</p>
            <input
                type='email'
                placeholder='example@website.com'
                className='reg__field'
                id='Email'
                aria-invalid={errors.Email ? "true" : "false"}
                {...register("Email", { required: true })}
            />
            <p>Password:</p>
            <input
                className='reg__field'
                type='password'
                placeholder='********'
                id='Password'
                aria-invalid={errors.Password ? "true" : "false"}
                {...register("Password", { required: true })}
            />
            <div className="reg__enter">
                <div className="reg__button">
                    <MenuButton onClick={() => checkErrors(errors)}>
                        Submit
                    </MenuButton>
                </div>
                <p>or</p>
                <img src={google} alt='google' className='reg__google' onClick={() => props.authoriseGoogle()} />
            </div >
        </form>
    </div >
}

export default Registration