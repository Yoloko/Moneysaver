import API from '../utils/API';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

export default function Form() {

    const classes = useStyles();    
    const [values, setValues] = React.useState({
        amount: '',
        description: '',
        weight: '',
      }); 


    const submitForm = () => {
        // alert(`${values.amount} + ${values.description}`)
        let body = {
            "amount":parseInt(values.amount),
            "description":values.description
        }
        API.addBudgetData('WyK5o0j7z9TrwzaAKMio1moacaZ2',body);
        setTimeout(function(){
          window.location.reload();
       }, 200)
    }



    return (

        
        <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.amount}
          onChange={(event) => setValues({...values, amount: event.target.value})}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          name="amount"
        />
        <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.description}
          onChange={(event) => setValues({...values, description: event.target.value})}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          name="description"
        />

        <Button onClick={submitForm}variant="contained" color="primary" disableElevation style={{marginTop: "20px"}}>
            Make Transaction
        </Button>
      </FormControl>
    )
}
