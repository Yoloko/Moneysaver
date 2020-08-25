import React, { Component } from 'react';
import * as API from '../utils/API';

class Form extends Component{

    constructor(){
        super();
        this.state={
            "title": "",
            "amount": ""
        }
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        let obj = {}
        obj["" +name] = value;

        this.setState((obj));
    }

    handleSubmit(event){
        event.preventDefault();
        const entry = {
            id: Number.parseInt(this.state.amount, 0),
            title: this.state.title,
            amount: Number.parseInt(this.state.amount, 0)
        };

        API.create(entry)
        .then(
            response => {
                this.props.handleAddRecord(response.data);
                this.setState({
                    title: "",
                    amount: ""
                });
            }
        ).catch(
            error => console.log(error.message)
        )

    }

    valid(){
        return this.state.title && this.state.amount;
    }

    render(){
        return (
            <form className="form mb-3 text-center" onSubmit={this.handleSubmit.bind(this)}>
              
                <div className="form-group mr-1">
                    <input type="text" className="form-control"  onChange={this.handleChange.bind(this)} placeholder="Enter Text" name="title" value={this.state.title} />
                </div>

                <div className="form-group mr-1">
                    <input type="text" className="form-control"  onChange={this.handleChange.bind(this)}  placeholder="Amount" name="amount" value={this.state.amount} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}> Add Transaction</button>
            </form>
        );
    }
}


export default Form;
