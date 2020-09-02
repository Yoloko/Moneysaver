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
import GoalText from './GoalText'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width:'389px'
  },
  media: {
    height: 40,
  },
});

export default function GoalProgress(props) {
  const classes = useStyles();
  const percentage = (parseInt(props.saved) / parseInt(props.savings.goal)) * 100;
  // console.log(percentage)
  const [hideButton, setHideButton] = React.useState({showButton: false}); 

  return (
    <div>
      <Card className={classes.root} style={{backgroundColor: "yellow"}}>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {`${props.savings.description} : $ ${props.savings.goal}`}
          </Typography> */}

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