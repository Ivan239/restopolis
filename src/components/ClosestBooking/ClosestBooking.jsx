import React, {useEffect, useState} from 'react';
import styles from './ClosestBooking.module.css';
import store from '../../redux/store/store';

function ClosestBooking() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const currentDate = now.toISOString().slice(0, 16);
  let nextBook = {};
  const [bookings, setBookings] = useState(store.getState().account.bookings);
  useEffect(
    () =>
      store.subscribe(() => {
        const newBookings = store.getState().account.bookings;
        if (newBookings) {
          newBookings.sort((a, b) => {
            if (a.Date < b.Date) {
              return 1;
            }
            if (a.Date > b.Date) {
              return -1;
            }
            return 0;
          });
        }
        setBookings(newBookings);
      }),
    []
  );
  if (bookings) {
    for (const elem of bookings) {
      // eslint-disable-line
      if (elem.Date.localeCompare(currentDate) > 0) {
        // sonarcube recommended to write with for of
        nextBook = elem;
        break;
      }
    }
  }
  return (
    <div className={styles.nextbooking}>
      <h3 className={styles.title}>Next booking</h3>
      {store.getState().account.bookings && Object.keys(nextBook).length > 0 ? (
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.names}>
              <p>Name: </p>
              <p>Phone: </p>
              <p>E-Mail: </p>
              <p>Amount of people: </p>
              <p>Date: </p>
            </div>
            <div className={styles.text}>
              <p>{nextBook.Name}</p>
              <p>{nextBook.Phone}</p>
              <p>{nextBook.Email}</p>
              <p>{nextBook.Amount}</p>
              <p>
                {nextBook.Date.slice(0, 10)} at {nextBook.Date.slice(11)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.error}>Sorry, you have no bookings</div>
      )}
    </div>
  );
}

export default ClosestBooking;
