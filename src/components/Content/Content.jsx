import React from "react";
import s from './Content.module.css';
import image from './../../img/main.png';
import Profile from "./Profile/Profile";
// import Addpost from "./Addpost/Addpost";
// import Posts from './Addpost/Posts'




const Content  = () => {
    return (
        <div className={s.content}>
            <div>
            <img className={s.main_img} src={image} alt="" />
            </div>
            <Profile />
            {/* <Addpost />
            <Posts /> */}
            


            

        </div>
    )
}

export default Content;

