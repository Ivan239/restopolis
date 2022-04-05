import ClosestBooking from '../ClosestBooking/ClosestBooking'
import Orders from '../Orders/Orders'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import './ProfileContent.css'

function ProfileContent(props) {
    const {
        currentUser,
        loading,
    } = props
    return <div className='profilecontent'>
        <div className='profile__left'>
            <div>
                <h3 className='profile__title'>Your profile</h3>
                <div className='profile__user'>
                    <img src={currentUser.photoURL} alt={currentUser.displayName} className='profile__photo' />
                    <ProfileInfo currentUser={currentUser} />
                </div>
            </div>
            <ClosestBooking uid={currentUser.uid} loading={loading}/>
        </div>
        <div className='profile__orders'>
            <Orders uid={currentUser.uid} loading={loading}/>
        </div>
    </div>
}

export default ProfileContent