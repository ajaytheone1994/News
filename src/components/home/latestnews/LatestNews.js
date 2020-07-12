import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function LatestNews() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
          (PM Narendra Modi address in ladkah)
          प्रधानमंत्री नरेंद्र मोदी ने आज लद्दाख में भारतीय जवानों को संबोधित करते हुए उनका उत्साह बढ़ाया और चीन को जमकर सुनाया भी।  
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Edited By Vishnu Rawal 
          </Typography>
        </CardContent>
       
      </div>
   <div style={{paddingTop:'10px'}}><img src={require('../../../assets/images/namo.jpg')} height="240" width="700"/></div>
    </Card>
  );
}
