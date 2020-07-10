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
           <div className="heading-top">
                 <div className="topmenu container">
                 
                    <div className="nav">	
                        <div>
                            <Link className="bold" to="/">Logo</Link>
                        </div>			
                        <div className="active">
                            <Link className="bold active" to="/">HOME</Link>
                        </div>
                        <div>
                            <Link className="bold" to="/register">REGISTER</Link>
                        </div>
                        <div><Link className="bold" to="/dashboard"></Link></div>
                        <div><Link className="bold" to=""></Link></div>
                        <div><Link className="bold" to=""></Link></div>
                        
                        </div>
                        
		        </div>
            </div>
        )
    }
}
