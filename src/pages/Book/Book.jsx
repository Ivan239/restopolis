import React from 'react';
import {useForm} from 'react-hook-form';
import {getDatabase, ref, set} from 'firebase/database';
import {toast} from 'react-toastify';
import styles from './Book.module.css';
import currentDate from '../../components/currentDate';
import newId from '../../components/newId';
import store from '../../redux/store/store';
import {addBooking} from '../../redux/account/actions';

function Book() {
  const minDate = currentDate(4);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const database = getDatabase();
  const onSubmit = data => {
    let userID = store.getState().account.uid;
    if (!userID) {
      userID = 'non-auth';
    }
    set(ref(database, `/bookings/${userID}/${newId()}`), data);
    reset();
    if (userID !== 'non-auth') {
      store.dispatch(addBooking(data));
    }
    toast.success('Table reserved', {
      autoClose: 2400,
    });
  };
  const toastError = field => {
    toast.error(`${field} is required`, {
      autoClose: 2400,
    });
  };
  const checkErrors = errorList => {
    if (errorList.Name) {
      toastError('Name');
    } else if (errorList.Email) {
      toastError('E-mail');
    } else if (errorList.Phone) {
      toastError('Phone');
    } else if (errorList.Date) {
      toastError('Date');
    } else if (errorList.Amount) {
      toastError('Amount');
    }
  };
  return (
    <div className={styles.book}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Table booking</h2>
        <p>Name</p>
        <input
          className={styles.name}
          placeholder="Ivan"
          id="Name"
          aria-invalid={errors.Name ? 'true' : 'false'}
          {...register('Name', {required: true})}
        />
        <p>Email</p>
        <input
          type="email"
          className={styles.email}
          placeholder="example@website.com"
          id="Email"
          aria-invalid={errors.Email ? 'true' : 'false'}
          {...register('Email', {required: true})}
        />
        <p>Phone</p>
        <input
          className={styles.phone}
          placeholder="+79810001122"
          id="Phone"
          aria-invalid={errors.Phone ? 'true' : 'false'}
          {...register('Phone', {required: true})}
        />
        <p>Date</p>
        <input
          type="datetime-local"
          className={styles.date}
          min={minDate}
          id="Date"
          aria-invalid={errors.Date ? 'true' : 'false'}
          {...register('Date', {required: true})}
        />
        <p>Amount of people</p>
        <input
          type="number"
          placeholder="0"
          min="1"
          max="40"
          className={styles.amount}
          id="Amount"
          aria-invalid={errors.Amount ? 'true' : 'false'}
          {...register('Amount', {required: true})}
        />
        <br />
        <input type="submit" value="Book" className={styles.submit} onClick={() => checkErrors(errors)} />
      </form>
    </div>
  );
}

export default Book;
