import './ProfileInfo.css'
import MenuButton from '../../components/MenuButton/MenuButton';
import { useEffect, useState } from 'react';
import store from '../../redux/store/store';

function ProfileInfo(props) {
    const {
        currentUser,
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
    return <div className='profile-info'>
        <p className='profile-info__name'>{currentUser.displayName}</p>
        <p className='profile-info__email'>{currentUser.email}</p>
        <p className='profile-info__orders'>Amount of orders: {orderAmount}</p>
        <p className='profile-info__bookings'>Amount of bookings: {bookingAmount}</p>
        <div className='profile-info__setbtn'>
            <MenuButton>
                <p className='profile-info__settxt'>Settings</p>
            </MenuButton>
        </div>
    </div>
}

export default ProfileInfo