import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Logout.css';

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
   

    render() {
        return (
                <Link to='/' className="logout">Logout</Link>
         
        )
    }
}

