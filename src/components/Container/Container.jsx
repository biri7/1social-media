import React from "react";
import s from './Container.module.css'
import Header from './../Header/Header'
import Navbar from './../Navbar/Navbar';
import Content from './../Profile/Content';



const Container = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Header />
                <Navbar />
                <Content />
            </div>

        </div>
    ) 
}


export default Container;