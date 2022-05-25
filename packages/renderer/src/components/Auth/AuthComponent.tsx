import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import logo from '@/assets/logo.png'
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {userSlice} from "@/store/reducers/UserSlice";
import {IUser} from "@/models/IUser";
const AuthComponent = () => {

    const {user, isAuth, isLoading, error} = useAppSelector(state => state.userReducer);
    const { setUserData, setPassword, setLogin} = userSlice.actions;
    const dispatch = useAppDispatch();

    let [name, setLoginState] = useState<string>('');
    let [pass, setPasswordState] = useState<string>('');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordState(event.target.value);
    };
    const authorized = () => {
        dispatch(setUserData({login:name, password:pass}));
    };
    return (
        <div style={{textAlign: "center"}}>
            <div style={{paddingTop: 30}}>
                <img style={{height: 50}} src={logo} alt=""/>
            </div>
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