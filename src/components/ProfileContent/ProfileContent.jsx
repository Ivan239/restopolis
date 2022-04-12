import React from 'react';
import PropTypes from 'prop-types';
import ClosestBooking from '../ClosestBooking/ClosestBooking';
import Orders from '../Orders/Orders';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import styles from './ProfileContent.module.css';
import emptyProfile from '../../assets/emptyProfile.png';

function ProfileContent(props) {
  const {currentUser, logout} = props;
  return (
    <div className={styles.profilecontent}>
      <div className={styles.left}>
        <div>
          <h3 className={styles.title}>Your profile</h3>
          <div className={styles.user}>
            <img src={currentUser.photoURL || emptyProfile} alt={currentUser.displayName} className={styles.photo} />
            <ProfileInfo currentUser={currentUser} logout={logout} />
          </div>
        </div>
        <ClosestBooking uid={currentUser.uid} />
      </div>
      <div className={styles.orders}>
        <Orders uid={currentUser.uid} />
      </div>
    </div>
  );
}

ProfileContent.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any), // eslint-disable-line react/forbid-prop-types
  logout: PropTypes.func.isRequired,
};

ProfileContent.defaultProps = {
  currentUser: {},
};

export default ProfileContent;
