import React, { Component } from 'react';
import API from '../utils/API';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: ""
        }
    }

    handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        let obj = {}
        obj["" + name] = value;

        this.setState((obj));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const entry = {
            description: this.state.description,
            amount: this.state.amount
        }

        API.addBudgetData(this.props.user.user.uid, entry).then(x => console.log(x));

    };

    // API.createUser(entry)
    // .then(
    //     response => {
    //         this.props.handleAddRecord(response.data);
    //         this.setState({
    //             description: "",
    //             amount: ""
    //         });
    //     }
    // ).catch(
    //     error => console.log(error.message)
    // )

    valid = () => {
        return this.state.description && this.state.amount;
    }

    render() {
        console.log(this.props.user.user.uid)

        return (
            <form className="form mb-3 text-center" onSubmit={this.handleSubmit.bind(this)}>

                <div className="form-group mr-1">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Enter Text" name="description" value={this.state.description} />
                </div>

                <div className="form-group mr-1">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}> Add Transaction</button>
            </form>
        );
    }
}


export default Form;
