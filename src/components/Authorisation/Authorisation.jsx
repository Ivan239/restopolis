import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import MenuButton from '../MenuButton/MenuButton';
import styles from './Authorisation.module.css';
import google from '../../assets/google.jpg';
import back from '../../assets/back.png';

function Authorisation(props) {
  const {
    authorise,
    setAuthForm,
    authoriseGoogle,
  } = props;
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
  const onSubmit = (data) => {
    authorise(data.Email, data.Password);
  };
  const checkErrors = (errorList) => {
    if (errorList.Email) {
      toastError('E-mail');
    } else if (errorList.Password) {
      toastError('Password');
    }
  };
  return (
    <div className={styles.auth}>
      <img src={back} alt="back" className={styles.back} onClick={() => setAuthForm(false)} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
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

Authorisation.propTypes = {
  authorise: PropTypes.func.isRequired,
  setAuthForm: PropTypes.func.isRequired,
  authoriseGoogle: PropTypes.func.isRequired,
};

export default Authorisation;
