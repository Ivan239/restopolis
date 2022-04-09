import ClosestBooking from '../ClosestBooking/ClosestBooking'
import Orders from '../Orders/Orders'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import './ProfileContent.css'
import emptyProfile from '../../assets/emptyProfile.png'

function ProfileContent(props) {
    const {
        currentUser,
        logout,
    } = props
    return <div className='profilecontent'>
        <div className='profile__left'>
            <div>
                <h3 className='profile__title'>Your profile</h3>
                <div className='profile__user'>
                    <img src={currentUser.photoURL || emptyProfile} alt={currentUser.displayName} className='profile__photo' />
                    <ProfileInfo currentUser={currentUser} logout={logout}/>
                </div>
            </div>
            <ClosestBooking uid={currentUser.uid}/>
        </div>
        <div className='profile__orders'>
            <Orders uid={currentUser.uid}/>
        </div>
    </div>
}

export default ProfileContent