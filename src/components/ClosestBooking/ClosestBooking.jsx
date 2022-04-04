import './ClosestBooking.css'
import React, { useEffect, useState } from 'react';
import store from '../../redux/store/store';

function ClosestBooking() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const currentDate = now.toISOString().slice(0, 16);
    let nextBook = {};
    const [bookings, setBookings] = useState(store.getState().account.bookings)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newBookings = store.getState().account.bookings
            if (newBookings) {
                newBookings.sort((a, b) => {
                    if (a.Date < b.Date) {
                        return 1;
                    }
                    if (a.Date > b.Date) {
                        return -1;
                    }
                    return 0;
                })
            }
            setBookings(newBookings)
        })
        return unsubscribe
    }, [])
    if (bookings) {
        for (let i = 0; i < bookings.length; i++) {
            if (bookings[i].Date.localeCompare(currentDate) > 0) {
                nextBook = bookings[i];
                break
            }
        }
    }
    return <div className='nextbooking'>
        <h3 className='nextbooking__title'>Next booking</h3>
        {store.getState().account.bookings && Object.keys(nextBook).length > 0 ?
            <div className='nextbooking__content'>
                <div className='nextbooking__info'>
                    <div className='nextbooking__names'>
                        <p>Name: </p>
                        <p>Phone: </p>
                        <p>E-Mail: </p>
                        <p>Amount of people: </p>
                        <p>Date: </p>
                    </div>
                    <div className='nextbooking__text'>
                        <p>{nextBook.Name}</p>
                        <p>{nextBook.Phone}</p>
                        <p>{nextBook.Email}</p>
                        <p>{nextBook.Amount}</p>
                        <p>{nextBook.Date.slice(0, 10)} at {nextBook.Date.slice(11)}</p>
                    </div>
                </div>
            </div> :
            <div className='nextbooking__error'>
                Sorry, you have no bookings
            </div>}
    </div>
}

export default ClosestBooking