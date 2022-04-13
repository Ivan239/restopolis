import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import styles from './Profile.module.css';
import firebase from '../../firebase';
import store from '../../redux/store/store';
import { deleteAccount, loadBookings, loadOrders, newAccount } from '../../redux/account/actions';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import MenuButton from '../../components/MenuButton/MenuButton';
import Authorisation from '../../components/Authorisation/Authorisation';
import Registration from '../../components/Registration/Registration';
import animation from './ProfileAnimation.module.css';

function Profile() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebase);
  const [authForm, setAuthForm] = useState(false);
  const [regForm, setRegForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(store.getState().account);
  const [isLogged, setIsLogged] = useState(!!Object.keys(currentUser).length);
  const errorToast = (error) => {
    toast.error(`${error.code} ${error.message}`, {
      autoClose: 2400,
    });
  };

  async function getData(uid) {
    const dbRef = ref(getDatabase());
    const getItem = (item) =>
      get(child(dbRef, `${item}/${uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return Object.values(snapshot.val());
          }
          return [];
        })
        .catch((error) => {
          console.error(error); // eslint-disable-line no-console
        });
    const bookingsResult = await getItem('bookings');
    const ordersResult = await getItem('diliveries');
    return {
      orders: ordersResult || [],
      bookings: bookingsResult || [],
    };
  }

  async function userAuthorised(result) {
    const { user } = result;
    store.dispatch(newAccount(user));
    return getData(user.uid).then((data) => {
      store.dispatch(loadOrders(data.orders));
      store.dispatch(loadBookings(data.bookings));
      setIsLogged(true);
      setAuthForm(false);
      setRegForm(false);
      toast.success('Successfull authorisation', {
        autoClose: 2400,
      });
    });
  }

  const authoriseGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        userAuthorised(result);
      })
      .catch((error) => {
        errorToast(error);
      });
  };

  const register = (email, password, name, photo) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photo,
        });
        return userCredential;
      })
      .then((result) => {
        userAuthorised(result);
      })
      .catch((error) => {
        errorToast(error);
      });
  };

  const authorise = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userAuthorised(userCredential);
      })
      .catch((error) => {
        errorToast(error);
      });
  };

  const logout = () => {
    store.dispatch(deleteAccount());
    setIsLogged(false);
    toast.success('Successfull logout', {
      autoClose: 2400,
    });
  };

  useEffect(
    () =>
      store.subscribe(() => {
        setCurrentUser(store.getState().account);
      }),
    [],
  );

  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <ProfileContent currentUser={currentUser} logout={logout} />
        <CSSTransition in={!isLogged} timeout={1000} classNames={animation} unmountOnExit>
          <div className={styles.form}>
            {!authForm && !regForm ? (
              <div className={styles.formcontent}>
                <div className={styles.sign}>
                  <MenuButton onClick={() => setRegForm(true)}>Sign Up</MenuButton>
                </div>
                <div className={styles.sign}>
                  <MenuButton onClick={() => setAuthForm(true)}>Sign In</MenuButton>
                </div>
              </div>
            ) : null}
            {authForm ? (
              <Authorisation
                authorise={authorise}
                authoriseGoogle={authoriseGoogle}
                setAuthForm={setAuthForm}
              />
            ) : null}
            {regForm ? (
              <Registration
                registerUser={register}
                authoriseGoogle={authoriseGoogle}
                setRegForm={setRegForm}
              />
            ) : null}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Profile;
