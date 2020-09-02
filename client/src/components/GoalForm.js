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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 40,
  },
});

export default function GoalForm(props) {
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
          <Thermometer
            theme="light"
            value="300"
            max="379"
            steps="3"
            
            size="large"
            height="300"
            />
        </CardContent>
    </Card>
      </div>
   
  );
}
