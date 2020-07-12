import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewsCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent style={{display:'flex'}}>
       <div style={{marginRight:'20px'}}><img src ={require('../../assets/images/corona.jpg')} height="200"/></div>
       <div>
         <h2>Corona Updates</h2>
         <strong style={{color:'#6C7175'}}>12 july 2020</strong>
        <p>
        At Batham Technical, we develop innovative and creative products 
        and services that provide total communication and information solutions. 
        Among a plethora of services, web design and development.
        
       </p>
       </div>
      </CardContent>
      <CardActions style={{textAlign:'right'}}>
        <Button size="small" style={{color:'#FF1F3D'}}>Read More</Button>
      </CardActions>
    </Card>
  );
}
