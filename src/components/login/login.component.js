import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.component.css'
import { toast} from 'react-toastify';


// class Button extends Component{
//     constructor(){
//         super();
//     }
// }

export class Login extends Component{

    constructor(){
        super();
        
        // to create a state declarea state object

        this.state = {
                username:"",
                password:"",
                usernameErr:"",
                passwordErr:""
        };

        // usually class based component are declared to use states.
    };
    handleChange = (e)=>{
        
        console.log("here at login handle change>>>",e.target.value);
        e.preventDefault();
        // destruct
        const {name,value} = e.target;
         
        this.setState({
            [name]:value,
        })
    }
    handleSubmit = (e)=>{
        toast.info("logged in");
        e.preventDefault();
        console.log("hello at handle submit");
        this.props.history.push('/dashboard');
        // perform HTTP API Call
    }
    validateForm(fieldName){
        // switch(fieldname){
        //     case 'username':
        //        break;  
        //     default:
        //         break;
        // }
    }

    render(){
        //render method is must for class based component
        // it must return single html node
        return(
            <div class="container loginPage">
                <div className="login-wrapper">            
                   <div className="login-heading">
                        <h2>Login</h2>
                       
                    </div>
                    <form name="loginForm" class="form-group">
                        
                        <label htmlFor="username">Username</label>
                        <input 
                            class="form-control" 
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder = "Username" 
                            name="username" 
                            id="username"
                        ></input>

                        <label htmlFor="username">Password</label>
                        <input 
                            type="password" 
                            class="form-control"
                            onChange={this.handleChange} 
                            placeholder = "password" 
                            name="password" 
                            id="password"
                        ></input>

                        <br></br>
                        <button 
                        onClick={this.handleSubmit} 
                        class="btn login waves-effect waves-light">Login</button>

                    </form>
                    <p>Dont have an account ? </p>
                    <p ><Link className="registration" to='/register'>Click to Register</Link></p>
                    
                    </div>
            </div>
        ) 
    }

};