import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import logo from '@/assets/logo.png';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { accountSlice } from '@/store/reducers/AccountSlice';
import { authAccount } from '@/store/action-creators/AccountActionCreator';
import { IAccount } from '@/models/IAccount';

const AuthComponent = () => {

    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector(state => state.accountReducer);
    const [loginState, setLoginState] = useState<string>('');
    const [passwordState, setPasswordState] = useState<string>('');

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordState(event.target.value);
    };
    const authorized = () => {
        dispatch(authAccount({ login: loginState, password: passwordState }));
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ paddingTop: 30 }}>
                <img style={{ height: 50 }} src={logo} alt='' />
            </div>
            <label style={{
                color: '#0c0c0c',
                padding: '0 15px 4px 15px',
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.26)',
                fontWeight: 'bold',
                position: 'fixed',
                top: 230,
                left: 1000,
            }}>
                {error}
            </label>
            <div style={{ marginTop: 135 }}>
                <TextField
                    itemRef={loginState}
                    id='login-field'
                    color={'warning'}
                    label='Login'
                    variant='standard'
                    onChange={handleChangeLogin}
                />

            </div>
            <div>
                <TextField
                    itemRef={passwordState}
                    id='password-field'
                    color={'warning'}
                    label='Password'
                    type='password'
                    variant='standard'
                    onChange={handleChangePassword}
                />
            </div>
            <div style={{ padding: 20 }}>
                <Button style={{ marginRight: 10 }} color={'warning'} variant='contained'
                        onClick={authorized}>Login</Button>
                <Button color={'primary'} variant='contained'>Register</Button></div>
        </div>
    );
};

export default AuthComponent;