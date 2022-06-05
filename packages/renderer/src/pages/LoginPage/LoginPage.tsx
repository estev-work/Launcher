import React from 'react';
import image from "@/assets/drakania.png";
import style from './loginpage.module.scss';
import AuthComponent from "@/components/Auth/AuthComponent";
import NewsComponent from "@/components/News/NewsComponent";
import {useAppSelector} from "@/hooks/redux";
const LoginPage = () => {
    const {isAuth} = useAppSelector(state => state.accountReducer);
    return (
        <div style={{minHeight:"100%"}} className={style.page} >
            <div className={style.info}>
                <img src={image} style={{
                    objectFit:"cover",
                    height:"300px",
                    width:"850px"
                }} alt=""/>
                <NewsComponent/>
            </div>
            {!isAuth &&
                <div style={{
                    margin: 15,
                    borderRadius: 10,
                    border: "rgba(209,209,241,0.5) 1px solid",
                    backgroundColor: "rgba(209,209,241,0.5)",
                    boxShadow: '0px 0px 26px 10px rgba(0,0,0,0.4)'
                }} className={style.login}>
                    <AuthComponent/>
                </div>
            }
        </div>
    );
};

export default LoginPage;