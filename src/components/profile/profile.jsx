import React from 'react';
import s from './profile.module.css';
import Mypost from './mypost/mypost.jsx';


const Profile = () =>{
    return <div className={s.content}>
                <div>
                    <img src="https://avatars.mds.yandex.net/get-pdb/245485/7cb4608a-f938-42a6-8020-216ca6df02a7/s1200" />
                 </div>
                <div>
                    ava + description
                </div>
               <Mypost />
           </div>        
}
export default Profile;