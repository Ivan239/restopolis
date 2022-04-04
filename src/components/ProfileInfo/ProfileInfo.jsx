import './ProfileInfo.css'
import MenuButton from '../../components/MenuButton/MenuButton';

function ProfileInfo(props) {
    const currentUser = props.currentUser
    return <div className='profile-info'>
        <p className='profile-info__name'>{currentUser.displayName}</p>
        <p className='profile-info__email'>{currentUser.email}</p>
        <p className='profile-info__orders'>Amount of orders: {23}</p>
        <p className='profile-info__bookings'>Amount of bookings: {12}</p>
        <div className='profile-info__setbtn'>
            <MenuButton>
                <p className='profile-info__settxt'>Settings</p>
            </MenuButton>
        </div>
    </div>
}

export default ProfileInfo