import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import logo from '@/assets/logo.png'
const AuthComponent = () => {

    let [login, setLogin] = useState<string>('loginInStorage');
    let [password, setPassword] = useState<string>('passwordInStorage');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const authorized = () => {
        if (login !== null) {
            localStorage.setItem("login", login);
        }
        if (password !== null) {
            localStorage.setItem("password", password);
        }
    };
    return (
        <div style={{textAlign: "center"}}>
            <div style={{paddingTop: 30}}>
                <img style={{height: 50}} src={logo} alt=""/>
            </div>
            <div style={{marginTop: 135}}>
                <TextField
                    itemRef={login}
                    id="login-field"
                    color={"warning"}
                    label="Login"
                    variant="standard"
                    onChange={handleChangeLogin}
                />

            </div>
            <div>
                <TextField
                    itemRef={password}
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