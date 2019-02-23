import React from 'react';
import s from './profile.module.css';
import Mypost from './mypost/mypost.jsx';
import ProfileInfo from './profileinfo/profileinfo';


const Profile = () =>{
    return (
            <div>
                <ProfileInfo />
                <Mypost />
            </div>  
    )     
}
export default Profile;