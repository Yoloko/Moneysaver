import React, { Component } from 'react'
import fire from '../config/fire'
import Form from './Form';
import Summary from './Summary';
import Table from './Table';
import IncExpTable from './IncExpTable'
import API from '../utils/API';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            userId: "",
            password: "",
            isLoaded: false,
            error: null,
            records:[],
            inc_exp:[],
            savings: {},
            userId:""


        }
    }
    logout = (e) =>{
        e.preventDefault();
        fire.auth().signOut();
        
    }

    componentDidMount(){
        let userId;
        try{
           userId = this.props;
        console.log(userId)

        }catch (error){
            console.log(error);
        }

        API.getBudgetData('WyK5o0j7z9TrwzaAKMio1moacaZ2').then(response => {
            console.log(response);

            this.setState({
                inc_exp: response.data.inc_exp,
                savings: response.data.savings
            })

        })

        
       
    }

    addRecord(r){
        let newRecords = [ ...this.state.records, r];
        this.setState({
            records: newRecords
        });
    }

    deleteRecord(r){
        const recordIndex = this.state.records.indexOf(r);
        const newRecords = this.state.records.filter( (record, index) => index !== recordIndex);

        this.setState({
            records: newRecords
        });
    }

    updateRecord(oldNew){
        const recordIndex = this.state.records.indexOf(oldNew.old);
        let newRecords = this.state.records.map(
            (record, index)=>{
                if(index === recordIndex){
                    return oldNew.new;
                }else{
                    return record;
                }
            }
        );

        this.setState({
            records: newRecords
        });
    }

    credits(){
        let c =  this.state.records.reduce( (preVal, curItem)=>{
            if(curItem.amount > 0 ){
                return preVal += curItem.amount;
            }else{
                return preVal;
            }
        }, 0 );
        return c;
    }

    debits(){
        return this.state.records.reduce( (preVal, curItem)=>{
            if(curItem.amount < 0 ){
                return preVal += curItem.amount;
            }else {
                return preVal;
            }
        }, 0 );
    }

    balance(){
        return this.credits() + this.debits();
    }


    render() {
        const { isLoaded, error, records } = this.state;
        let TablePlaceholder;
        if(error){
            TablePlaceholder = <div className="alert alert-danger" role="alert"> Error: {error.message} </div>;
        }else if (!isLoaded){
            TablePlaceholder = <div className="alert alert-primary" role="alert">Loading...</div>;
        }else{
            TablePlaceholder = <Table entries={records}
                   handleUpdateRecord={this.updateRecord(this)}
                   handleDeleteRecord={this.deleteRecord(this)}/>;
        }
        return (
            <div>
                {/* {console.log(this.state)} */}
                {/* <h1>logged in user ({this.state.username})</h1> */}
                <button onClick = {this.logout}>Logout</button>
                <div className="container">

                <h2 style={{textAlign:"center"}}>Quick Save</h2>

                <br />

                <div className="row mb-3">
                    <Summary text="Income" type="success" amount={this.credits()} />
                    <Summary text="Expenses" type="danger" amount={this.debits()} />
                    <Summary text="Saved" type="info" amount={this.balance()} />
                </div>
                <br />
                <Form handleAddRecord={this.addRecord.bind(this)} user={this.props} />

                <hr />
                <br />

                <IncExpTable
                    inc_exp={this.state.inc_exp}
                />
            </div>
            </div>
        )
    }
}
