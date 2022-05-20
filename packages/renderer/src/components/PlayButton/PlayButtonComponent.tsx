import React from 'react';
import {Button} from "@mui/material";
import style from '@/styles/playbutton.module.scss'
const PlayButtonComponent = () => {
    return (
        <div style={{margin:20}}>
            <Button className={style.playButton} style={{borderRadius:100}} disabled={false} variant="contained">PLAY</Button>
        </div>
    );
};

export default PlayButtonComponent;