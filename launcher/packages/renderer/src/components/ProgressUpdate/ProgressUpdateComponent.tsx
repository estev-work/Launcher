import React from 'react';
import style from '@/styles/progressupdate.module.scss';
import {Box, LinearProgress, Typography} from "@mui/material";

interface ProgressUpdateComponentProps{
    color?: "warning" | "primary" | "secondary" | "error" | "info" | "success" | "inherit" | undefined,
    label:string
}
const ProgressUpdateComponent = (props:ProgressUpdateComponentProps) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className={style.container}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <Typography fontSize={8} color="white">{props.label}</Typography>
                                <Typography fontSize={8} color="white">file name</Typography>
                                <LinearProgress variant="determinate" color={props.color} value={progress} />
                            </Box>
                            <Box sx={{ minWidth: 25 }}>
                                <Typography fontSize={11} color="white">{`${Math.round(
                                    progress,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default ProgressUpdateComponent;