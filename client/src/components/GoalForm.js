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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

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

  const [values, setValues] = React.useState({
    amount: '',
    description: '',
  });

  const submitForm = () => {
    // alert(`${values.amount} + ${values.description}`)
    let body = {
        "goal":parseInt(values.amount),
        "saved":props.balance,
        "description":values.description
    }
    API.updateGoal(props.userId,body);
    setTimeout(function(){
      window.location.reload();
   }, 200)
}

  return (
      <div>
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`Goal : ${props.goal.description}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Divider />
          <TextField
          id="standard-textarea"
          label={`${props.goal.description}`}
          placeholder="New Description"
          onChange={(event) => setValues({...values, description: event.target.value})}
          multiline
        />
        <TextField
          id="standard-textarea"
          label={`$ ${props.goal.goal}`}
          placeholder="New Amount"
          onChange={(event) => setValues({...values, amount: event.target.value})}
          multiline
        />

        <Button onClick={submitForm}variant="contained" color="primary" disableElevation style={{marginTop: "20px"}}>
                    Update your Goal
        </Button>
        </CardContent>
    </Card>
      </div>
   
  );
}
