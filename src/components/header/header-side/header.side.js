import React from 'react';
import './header.side.css';
import {Link} from 'react-router-dom';
import Logout from '../../Logout/Logout';



function Dropdown(props){

    return (
        <div className="drop heading-top">
            <div classname="nav">
                <ul className="nav side">
                    <li><Link className="bold" to="/h">Add products</Link></li>
                    <li><Link className="bold" to="/y">View products</Link></li>
                    <li><Link className="bold" to="/e">Search products</Link></li>
                    <li><Link className="bold" to="/f">Messages</Link></li>
                    <li><Link className="bold" to="/dd">Profile</Link></li>
                    <li><Link className="bold" to="/ee">Setting</Link></li>
                    <li><Link to="/"> <Logout /> </Link></li>
                </ul>
               
             </div>
         </div>
    )
}
export default Dropdown;