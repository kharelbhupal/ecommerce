import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';





export class Header extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        return (
        
            <div className="left naving">
            
                <ul className="nav side">
                    <li><Link className="bold" to="/h">LOGO</Link></li>
                    <li><Link className="bold" to="/">Login</Link></li>
                    <li><Link className="bold" to="/register">Register</Link></li>
                    
                </ul>
               
             
         </div>
        
        )
    }
}
