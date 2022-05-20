import React from 'react';
import {Button, TextField, Typography} from "@mui/material";

const AuthComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <div style={{paddingTop:30}}>
                <Typography fontSize={30} color="black">
                    {'Server logo'}
                </Typography>
            </div>
            <div style={{marginTop:135}}>
                <TextField
                    id="login-field"
                    color={"warning"}
                    label="Login"
                    variant="standard"
                />

            </div>
            <div>
                <TextField
                    id="password-field"
                    color={"warning"}
                    label="Password"
                    type="password"
                    variant="standard"
                />
            </div>
            <div style={{padding:20}} >
            <Button style={{marginRight:10}} color={"warning"}  variant="contained">Login</Button>
            <Button color={"primary"}  variant="contained">Register</Button></div>
        </div>
    );
};

export default AuthComponent;