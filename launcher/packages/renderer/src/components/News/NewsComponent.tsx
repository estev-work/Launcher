import React from 'react';
import style from "@/styles/progressupdate.module.scss";
import {Box, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const NewsComponent = () => {
    return (
        <div className={style.container}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{width: '100%', mr: 1}}>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{width: '100%', mr: 1}}>
                                <Typography fontSize={25} color="orange">Current ivents</Typography>
                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{m: 'auto 0'}}
                                            align="right"
                                            variant="body2"
                                            color="white"
                                        >
                                            9:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                            <TimelineDot color="success">
                                                <AutoAwesomeIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{py: '12px', px: 2}}>
                                            <Typography  color={"white"} variant="h6" component="span">
                                                Eat
                                            </Typography>
                                            <Typography color={"white"}>Because you need strength</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{m: 'auto 0'}}
                                            variant="body2"
                                            color="white"
                                        >
                                            10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector/>
                                            <TimelineDot  color="grey">
                                                <AutoAwesomeIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{py: '12px', px: 2}}>
                                            <Typography  color={"white"} variant="h6" component="span">
                                                Code
                                            </Typography>
                                            <Typography  color={"white"}>Because it&apos;s awesome!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default NewsComponent;