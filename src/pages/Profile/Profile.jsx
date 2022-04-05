import './Profile.css'
import app from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import store from '../../redux/store/store';
import { deleteAccount, loadBookings, loadOrders, newAccount } from '../../redux/account/actions';
import { useEffect, useState } from 'react';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import { getDatabase, ref, get, child } from "firebase/database";
import { toast } from 'react-toastify'

function Profile() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    async function getData(uid) {
        const dbRef = ref(getDatabase());
        const bookings = get(child(dbRef, `bookings/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return Object.values(snapshot.val())
            }
        }).catch((error) => {
            console.error(error);
        });
        const bookingsResult = await bookings
        const orders = get(child(dbRef, `deliveries/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return Object.values(snapshot.val())
            }
        }).catch((error) => {
            console.error(error);
        });
        const ordersResult = await orders
        return {
            orders: ordersResult || [],
            bookings: bookingsResult || []
        }
    }
    const authorise = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                store.dispatch(newAccount(user))
                return getData(user.uid)   
            }).then(data => {
                store.dispatch(loadOrders(data.orders))
                store.dispatch(loadBookings(data.bookings))
                toast.success(`Successfull authorisation`, {
                    autoClose: 2400
                })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode} ${errorMessage}`, {
                    autoClose: 2400
                })
            });
    }
    const logout = () => {
        store.dispatch(deleteAccount());
        toast.success(`Successfull logout`, {
            autoClose: 2400
        })
    }
    const [currentUser, setCurrentUser] = useState(store.getState().account)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCurrentUser(store.getState().account)
        })
        return unsubscribe
    }, [])

    return <div className="profile">
        <button onClick={() => authorise()}>Auth</button>
        <button onClick={() => logout()}>Logout</button>
        <div className='profile__content'>
            <ProfileContent currentUser={currentUser} />
        </div>
    </div >
}

export default Profile