import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import Thermometer from 'react-thermometer-component'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 40,
  },
});

export default function Goal(props) {
  const classes = useStyles();

  return (
      <div>
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`Goal : ${''}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Divider />
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.01,
              strokeLinecap: 'round',
              textSize: '1.70em',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${100 / 100})`,
              textColor: 'rgb(51 66 71)',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
              // transform: `translate(${-2}px, ${8}%)`
            })}
          />
        </CardContent>
    </Card>
      </div>
   
  );
}
