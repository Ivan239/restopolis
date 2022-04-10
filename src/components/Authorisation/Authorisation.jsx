import MenuButton from '../MenuButton/MenuButton'
import styles from './Authorisation.module.css'
import google from '../../assets/google.jpg'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import back from '../../assets/back.png'

function Authorisation(props) {
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
    const onSubmit = (data) => {
        props.authorise(data.Email, data.Password)
    };
    const checkErrors = (errors) => {
        return errors.Email ? toastError('E-mail') :
            errors.Password ? toastError('Password') : null
    }
    return <div className={styles.auth}>
        <img src={back} alt='back' className={styles.back} onClick={() => props.setAuthForm(false)}/>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <p>E-mail:</p>
            <input
                type='email'
                placeholder='example@website.com'
                className={styles.field}
                id='Email'
                aria-invalid={errors.Email ? "true" : "false"}
                {...register("Email", { required: true })}
            />
            <p>Password:</p>
            <input
                className={styles.field}
                type='password'
                placeholder='********'
                id='Password'
                aria-invalid={errors.Password ? "true" : "false"}
                {...register("Password", { required: true })}
            />
            <div className={styles.enter}>
                <div className={styles.button}>
                    <MenuButton onClick={() => checkErrors(errors)}>
                        Submit
                    </MenuButton>
                </div>
                <p>or</p>
                <img src={google} alt='google' className={styles.google} onClick={() => props.authoriseGoogle()} />
            </div >
        </form>
    </div >
}

export default Authorisation