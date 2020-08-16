import React, { Component } from 'react'
import fire from '../config/fire'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
    }
    logout = (e) =>{
        e.preventDefault();
        fire.auth().signOut();
        
    }
    render() {
        return (
            <div>
                <h1>logged in user ( ..)</h1>
                <button onClick = {this.logout}>Logout</button>
            </div>
        )
    }
}
