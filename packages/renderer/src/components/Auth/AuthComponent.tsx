import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import logo from '@/assets/logo.png'
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {userSlice} from "@/store/reducers/UserSlice";

const AuthComponent = () => {

    const {user, isAuth, isLoading, error} = useAppSelector(state => state.userReducer);
    const { setUserData, setPassword, setLogin, auth} = userSlice.actions;
    const dispatch = useAppDispatch();
    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLogin(event.target.value));
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value));
    };
    const authorized = () => {
        dispatch(auth());
    };
    return (
        <div style={{textAlign: "center"}}>
            <div style={{paddingTop: 30}}>
                <img style={{height: 50}} src={logo} alt=""/>
            </div>
            <label style={{color:"#0c0c0c",padding:"0 15px 4px 15px", borderRadius:4, backgroundColor:"rgba(255,255,255,0.26)", fontWeight:"bold", position:"fixed", top: 230, left:1000}}>{(error) ? error.message : ''}</label>
            <div style={{marginTop: 135}}>
                <TextField
                    itemRef={user.login}
                    id="login-field"
                    color={"warning"}
                    label="Login"
                    variant="standard"
                    onChange={handleChangeLogin}
                />

            </div>
            <div>
                <TextField
                    itemRef={user.password}
                    id="password-field"
                    color={"warning"}
                    label="Password"
                    type="password"
                    variant="standard"
                    onChange={handleChangePassword}
                />
            </div>
            <div style={{padding: 20}}>
                <Button style={{marginRight: 10}} color={"warning"} variant="contained"
                        onClick={authorized}>Login</Button>
                <Button color={"primary"} variant="contained">Register</Button></div>
        </div>
    );
};

export default AuthComponent;