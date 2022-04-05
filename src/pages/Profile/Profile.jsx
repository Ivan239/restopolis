import './Profile.css'
import app from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import store from '../../redux/store/store';
import { deleteAccount, loadBookings, loadOrders, newAccount } from '../../redux/account/actions';
import { useEffect, useState } from 'react';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import { getDatabase, ref, get, child } from "firebase/database";
import { toast } from 'react-toastify'
import MenuButton from '../../components/MenuButton/MenuButton';
import Authorisation from '../../components/Authorisation/Authorisation';
import Registration from '../../components/Registration/Registration';
import { CSSTransition } from 'react-transition-group'

function Profile() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [authForm, setAuthForm] = useState(false)
    const [regForm, setRegForm] = useState(false)
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
    const authoriseGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                userAuthorised(result)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode} ${errorMessage}`, {
                    autoClose: 2400
                })
            })
    }
    const register = (email, password, name, photo) => {
        console.log(name, photo)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photo
                })
                return userCredential
            }).then((result) => {                
                userAuthorised(result)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode} ${errorMessage}`, {
                    autoClose: 2400
                })
            })
    }
    const authorise = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userAuthorised(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode} ${errorMessage}`, {
                    autoClose: 2400
                })
            });
    }
    async function userAuthorised(result) {
        const user = result.user;
        store.dispatch(newAccount(user))
        console.log(user)
        return getData(user.uid)
            .then(data => {
                store.dispatch(loadOrders(data.orders))
                store.dispatch(loadBookings(data.bookings))
                setIsLogged(true)
                setAuthForm(false)
                setRegForm(false)
                toast.success(`Successfull authorisation`, {
                    autoClose: 2400
                })
            })
    }
    const logout = () => {
        store.dispatch(deleteAccount());
        setIsLogged(false)
        toast.success(`Successfull logout`, {
            autoClose: 2400
        })
    }
    const [currentUser, setCurrentUser] = useState(store.getState().account)
    const [isLogged, setIsLogged] = useState(!!Object.keys(currentUser).length)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCurrentUser(store.getState().account)
        })
        return unsubscribe
    }, [])

    return <div className="profile">
        <div className='profile__content'>
            <ProfileContent currentUser={currentUser} logout={logout} />
            <CSSTransition in={!isLogged} timeout={1000} classNames={'profile__auth'} unmountOnExit >
                <div className='profile__form'>
                    {
                        !authForm && !regForm ? <div className='profile__formcontent'>
                            <div className='profile__sign'>
                                <MenuButton onClick={() => setRegForm(true)}>Sign Up</MenuButton>
                            </div>
                            <div className='profile__sign'>
                                <MenuButton onClick={() => setAuthForm(true)}>Sign In</MenuButton>
                            </div>
                        </div> : authForm ? <Authorisation authorise={authorise} authoriseGoogle={authoriseGoogle} setAuthForm={setAuthForm} /> :
                            <Registration register={register} authoriseGoogle={authoriseGoogle} setRegForm={setRegForm} />
                    }
                </div>
            </CSSTransition>
        </div>
    </div >
}

export default Profile