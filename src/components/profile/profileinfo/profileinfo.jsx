import React from 'react';
import s from './profileinfo.module.css';



const ProfileInfo = () =>{
    return (
            <div>
                <div>
                    <img src="https://avatars.mds.yandex.net/get-pdb/245485/7cb4608a-f938-42a6-8020-216ca6df02a7/s1200" />
                 </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
              
           </div>     );  
}
export default ProfileInfo;