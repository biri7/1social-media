import React from "react"
import s from  './Header.module.css'
import logo from "./../../img/logo.svg"


const Header = () => {
    return (
        <div className={s.header}>
           <div className={s.container}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </div>


        </div>
    )
}



export default Header;
