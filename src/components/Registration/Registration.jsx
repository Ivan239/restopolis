import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import MenuButton from '../MenuButton/MenuButton';
import styles from './Registration.module.css';
import google from '../../assets/google.jpg';
import back from '../../assets/back.png';

function Registration(props) {
  const {
    registerUser,
    setRegForm,
    authoriseGoogle,
  } = props;
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{8,}$/i;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toastError = (field) => {
    toast.error(`${field} is required`, {
      autoClose: 2400,
    });
  };
  const passwordText = 'The password must contain at least 1 letter and 1 number, and be longer than 8 and not shorter than 32 characters.';
  const passwordError = () => {
    toast.error(passwordText, {
      autoClose: 9000,
    });
  };
  const onSubmit = (data) => {
    if (passwordPattern.test(data.Password)) {
      registerUser(data.Email, data.Password, data.Name);
    } else {
      passwordError();
    }
  };
  const checkErrors = (errorList) => {
    if (errors.Name) {
      toastError('Name');
    } else if (errors.Email) {
      toastError('E-mail');
    } else if (errorList.Password) {
      toastError('Password');
    }
  };
  return (
    <div className={styles.reg}>
      <img src={back} alt="back" className={styles.back} onClick={() => setRegForm(false)} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <p>Name:</p>
        <input
          placeholder="Ivan Ivanov"
          className={styles.field}
          id="Name"
          aria-invalid={errors.Name ? 'true' : 'false'}
          {...register('Name', { required: true })}
        />
        <p>E-mail:</p>
        <input
          type="email"
          placeholder="example@website.com"
          className={styles.field}
          id="Email"
          aria-invalid={errors.Email ? 'true' : 'false'}
          {...register('Email', { required: true })}
        />
        <p>Password:</p>
        <input
          className={styles.field}
          type="password"
          placeholder="********"
          id="Password"
          aria-invalid={errors.Password ? 'true' : 'false'}
          {...register('Password', { required: true })}
        />
        <div className={styles.enter}>
          <div className={styles.button}>
            <MenuButton onClick={() => checkErrors(errors)} type="submit">
              Submit
            </MenuButton>
          </div>
          <p>or</p>
          <img src={google} alt="google" className={styles.google} onClick={() => authoriseGoogle()} />
        </div>
      </form>
    </div>
  );
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setRegForm: PropTypes.func.isRequired,
  authoriseGoogle: PropTypes.func.isRequired,
};

export default Registration;
