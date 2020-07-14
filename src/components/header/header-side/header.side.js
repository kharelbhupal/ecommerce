import React, {useState} from 'react';
import './header.side.css';
import {Link} from 'react-router-dom';
import Logout from '../../Logout/Logout';




function Dropdown(props){

    return (
        <div className="right naving">
            <Navbar className="">
                <NavItem className="navitem" names="Menu">
                    <DropdownMenu/>
                </NavItem>
                
            </Navbar>
       </div>
    )
}

function Navbar(props){
    return (
        <div className="navingbar">
            <ul className="navingbar-nav">
              {props.children}
            </ul>
        </div>
    )
}

function NavItem(props){

    const [open, setOpen] = useState(false);
    return(
        <React.Fragment>
            <li className="naving-item ">
            <Link className="menu white-text" onClick={()=>setOpen(!open)}>{props.names} 
            <i className="material-icons right">arrow_drop_down
            </i></Link>
            {open && props.children}
            </li>

            
        </React.Fragment>
    )
}
function DropdownMenu(){
    function DropdownItem(props){
        return(
            <Link to={props.link} className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}
                <span className="icon-button">{props.leftIcon}</span>

            </Link>
        )
    }
    return (
        <div className="dropingdown">
            <DropdownItem link="/addProducts"> <i class="material-icons left">add</i> Add Products</DropdownItem>
            <DropdownItem><i class="material-icons left">pageview</i> View Products</DropdownItem>
            <DropdownItem><i class="material-icons left">search</i> Search Products</DropdownItem>
            <DropdownItem><i class="material-icons left">message</i> Messages</DropdownItem>
            <DropdownItem><i class="material-icons left">person</i> Profile</DropdownItem>
            <DropdownItem><i class="material-icons left">settings</i> Settings</DropdownItem>
            <DropdownItem><i class="material-icons left">exit_to_app</i> Logout</DropdownItem> 
            </div>
    )
}
export default Dropdown;