import style from '@/styles/app.module.scss'
import React from 'react';
import LoginPage from "@/pages/LoginPage/LoginPage";
import ProgressUpdateComponent from "@/components/ProgressUpdate/ProgressUpdateComponent";
import PlayButtonComponent from "@/components/PlayButton/PlayButtonComponent";

const App = () => {
    return (
        <React.Fragment>
            <div className={style.pages}>
                <LoginPage/>
            </div>
            <div className={style.update_panel}>
                <div style={{gridArea: "1 / 1 / 2 / 2"}}>
                    <ProgressUpdateComponent label='label current progress' key='current' color={'warning'} />
                    <ProgressUpdateComponent label='label full progress' key='full'  color={'primary'} />
                </div>
                <PlayButtonComponent key={'play'}/>
            </div>
        </React.Fragment>
    )
}

export default App;