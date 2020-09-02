import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';


function Summary(props){

    return (
            <Card style={{backgroundColor: "yellow"}}>
              <CardContent>
                <div>
                  <CardHeader title={props.text} style={{backgroundColor: "red", margin: `${-15}px ${-15}px ${0}px ${-15}px`}}>
                  </CardHeader>
                </div>
                <CardHeader title={props.amount} style={{backgroundColor: "yellow", margin: `${-15}px ${-15}px ${0}px ${-15}px`}}>
                  
                </CardHeader>
              </CardContent>
            </Card>
        );
}


export default Summary;
