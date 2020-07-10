import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
   

    render() {
        return (
            <div className="logout">
                <button
                className="btn btn-primary btn-sm"
                   
                >Logout</button>
            </div>
        )
    }
}

