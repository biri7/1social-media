import React from "react";
import s from './Profile.module.css';
import avatar from './../../../img/profile/avatar.jpg'


const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.image_wrapper}>
                <img className={s.avatar} src={avatar} alt="avatar" />

            </div>


        </div>
    )
}


export default Profile;