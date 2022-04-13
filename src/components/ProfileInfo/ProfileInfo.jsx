import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileInfo.module.css';
import MenuButton from '../MenuButton/MenuButton';
import store from '../../redux/store/store';

function ProfileInfo(props) {
  const { currentUser, logout } = props;
  const [bookingAmount, setBookingAmount] = useState(store.getState().account.bookingAmount);
  const [orderAmount, setOrderAmount] = useState(store.getState().account.orderAmount);
  useEffect(
    () =>
      store.subscribe(() => {
        setBookingAmount(store.getState().account.bookingAmount);
        setOrderAmount(store.getState().account.orderAmount);
      }),
    [],
  );
  return (
    <div className={styles['profile-info']}>
      <p className={styles.name}>{currentUser.displayName || 'Ivan Ivanov'}</p>
      <p className={styles.email}>{currentUser.email || 'example@website.com'}</p>
      <p className={styles.orders}>
        Amount of orders:
        {orderAmount}
      </p>
      <p className={styles.bookings}>
        Amount of bookings:
        {bookingAmount}
      </p>
      <div className={styles.setbtn}>
        <MenuButton>
          <p className={styles.settxt} onClick={() => logout()}>
            Logout
          </p>
        </MenuButton>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any), // eslint-disable-line react/forbid-prop-types
  logout: PropTypes.func.isRequired,
};

ProfileInfo.defaultProps = {
  currentUser: {},
};

export default ProfileInfo;
