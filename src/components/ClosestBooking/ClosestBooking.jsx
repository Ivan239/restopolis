import './ClosestBooking.css'
import { getDatabase, ref, get, child } from "firebase/database";
import React, { PureComponent } from 'react';

class ClosestBooking extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            loading: true,
        };
    }

    componentDidMount() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `bookings/${this.props.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    bookings: Object.values(snapshot.val()),
                    loading: false
                })
            } else {
                this.setState({
                    loading: false
                })
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        let now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        const currentDate = now.toISOString().slice(0, 16);
        let nextBook = {};
        if (this.state.bookings) {
            for (let i = 0; i < this.state.bookings.length; i++) {
                if (this.state.bookings[i].Date.localeCompare(currentDate) > 0) {
                    nextBook = this.state.bookings[i];
                    break
                }
            }
        }
        return <div className='nextbooking'>
            <h3 className='nextbooking__title'>Next booking</h3>
            {!this.state.loading ? this.state.bookings && Object.keys(nextBook).length > 0 ?
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
                </div>
                : <div>Loading</div>}
        </div>
    }
}

export default ClosestBooking