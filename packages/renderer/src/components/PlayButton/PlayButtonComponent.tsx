import React from 'react';
import {Button} from "@mui/material";
import style from '@/styles/playbutton.module.scss'
//import * as path from "path";
const PlayButtonComponent = () => {
    const onClick = ()=>{
        //alert(__dirname.split(path.sep).pop());
    }
    // const remote = require('remote'); // Load remote compnent that contains the dialog dependency
    // const dialog = remote.require('dialog'); // Load the dialogs component of the OS
    // const fs = require('fs'); // Load the File System to execute our common tasks (CRUD)
    // const PlayGame = () => {
    //   const file = fs.readFileSync('/root/www/secrets/private.key', 'utf8');
    // }
    return (
        <div style={{margin:20}}>
            <Button onClick={onClick} className={style.playButton} style={{borderRadius:100}} disabled={false} variant="contained">PLAY</Button>
        </div>
    );
};

export default PlayButtonComponent;