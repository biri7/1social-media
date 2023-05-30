import React from "react";
import s from './Content.module.css'
import image from './../../img/main.png'


const Content  = () => {
    return (
        <div className={s.content}>
            <img className={s.main_img} src={image} alt="" />
            

            

        </div>
    )
}

export default Content;

