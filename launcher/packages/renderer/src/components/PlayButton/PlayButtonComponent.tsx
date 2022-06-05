import React from 'react';
import {Button} from "@mui/material";
import style from '@/styles/playbutton.module.scss'
import {accountSlice} from "@/store/reducers/AccountSlice";
import {useAppDispatch} from "@/hooks/redux";

const PlayButtonComponent = () => {
    const { logout} = accountSlice.actions;
    const dispatch = useAppDispatch();
    const onClick = ()=>{
        dispatch(logout());
    }

    return (
        <div style={{margin:20}}>
            <Button onClick={onClick} className={style.playButton} style={{borderRadius:100}} disabled={false} variant="contained">PLAY</Button>
        </div>
    );
};

export default PlayButtonComponent;