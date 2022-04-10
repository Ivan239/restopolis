import styles from './ProfileInfo.module.css'
import MenuButton from '../../components/MenuButton/MenuButton';
import { useEffect, useState } from 'react';
import store from '../../redux/store/store';

function ProfileInfo(props) {
    const {
        currentUser,
        logout,
    } = props
    const [bookingAmount, setBookingAmount] = useState(store.getState().account.bookingAmount)
    const [orderAmount, setOrderAmount] = useState(store.getState().account.orderAmount)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setBookingAmount(store.getState().account.bookingAmount)
            setOrderAmount(store.getState().account.orderAmount)
        })
        return unsubscribe
    }, [])
    return <div className={styles['profile-info']}>
        <p className={styles.name}>{currentUser.displayName || "Ivan Ivanov"}</p>
        <p className={styles.email}>{currentUser.email || "example@website.com"}</p>
        <p className={styles.orders}>Amount of orders: {orderAmount}</p>
        <p className={styles.bookings}>Amount of bookings: {bookingAmount}</p>
        <div className={styles.setbtn}>
            <MenuButton>
                <p className={styles.settxt} onClick={() => logout()}>Logout</p>
            </MenuButton>
        </div>
    </div>
}

export default ProfileInfo