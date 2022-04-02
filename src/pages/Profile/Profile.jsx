import './Profile.css'
import app from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import store from '../../redux/store/store';
import { deleteAccount, newAccount } from '../../redux/account/actions';

function Profile() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const authorise = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            store.dispatch(newAccount(user))
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} ${errorMessage}`)
        });
    }
    const logout = () => {
        store.dispatch(deleteAccount());
    }

    return <div className="profile">
        <button onClick={() => authorise()}>Register</button>
        <button onClick={() => logout()}>Logout</button>
    </div >
}

export default Profile