import React from "react";
import s from  './Navbar.module.css';
import profile from "./../../img/profile.jpg"
import friends from './../../img/friends.svg'
import groups from "./../../img/groups.svg"
import messages from "./../../img/messages.png"
import settings from './../../img/settings.png'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.menu}>
                <li className={s.item}>
                    <a className={s.link} href="#!">
                        <img className={s.image} src={profile} alt="" />
                        <p className={s.text}>Myrat</p>
                    </a>
                </li>
                <li className={s.item}>
                  
                    <a className={s.link} href="#!">
                        <img className={s.image} src={messages} alt="messages" />
                        <p className={s.text}>Messages</p>
                    </a>
                </li>
                <li className={s.item}>
                <a className={s.link} href="#!">
                        <img className={s.image} src={friends} alt="" />

                        <p className={s.text}>Friends</p>
                    </a>
                </li>
                <li className={s.item}>


                <a className={s.link} href="#!">
                            <img className={s.image} src={groups} alt="" />
                            <p className={s.text}>News</p>
                        </a>
                    
                </li>
                <li className={s.item}>
                    <a className={s.link} href="#!">
                    <img className={s.image} src={settings} alt="" />
                    <p className={s.text}>Settings</p>
                    </a>
                </li>

            </ul>

        </div>
    )
}


export default Navbar;
