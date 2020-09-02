import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


function Summary(props){

    return (
            // <div className="col">
            //   <div className="card">
            //     <div className={`card-header bg-${props.type} text-white`}>
                  
            //     </div>
            //     <div className="card-body">
            //       {props.amount}
            //     </div>
            //   </div>
            // </div>

            <Card>
              <CardContent>
                <div>
                  <Typography>
                    {props.text}
                  </Typography>
                </div>
                  <Divider/>
                <Typography>
                  {props.amount}
                </Typography>
              </CardContent>
            </Card>
        );
}


export default Summary;
