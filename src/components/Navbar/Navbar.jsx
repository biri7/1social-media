import React from "react";
import s from  './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.menu}>
                <li className={s.item}><a className={s.link} href="#!">Profile</a></li>
                <li className={s.item}><a className={s.link} href="#!">Friends</a></li>
                <li className={s.item}><a className={s.link} href="#!">News</a></li>
                <li className={s.item}><a className={s.link} href="#!">Music</a></li>
                <li className={s.item}><a className={s.link} href="#!">Settings</a></li>

            </ul>

        </div>
    )
}


export default Navbar;
