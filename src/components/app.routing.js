import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './header/header.component';
import {Login} from './login/login.component';
import {Register} from './register/register';

import Dropdown from './header/header-side/header.side';
import './app.routing.css';
import Search from './Search/Search';

// import Sidebar from './sidebar/sidebar.component';
// there are two types of router public and private
// public router can be used by any user
// whereas private route are only used by logged in users

// functional component
const PageNotFound = ()=>{
    return(
        <div>
            <h2>Page not Found</h2>
             <img alt="MyImage" src='../../public/error.jpg'></img>
        </div>
    )
}
const Dynamic =(props)=>{
    return (
        <h2>This is dynamic end</h2>
    )
}



const ProtectedRoute = ({component:Component,...rest})=>{
    return <Route {...rest} render={(routeProps)=>(

        <React.Fragment>
        
            <nav>
                <div className="nav-wrapper container-fluid"> 
                <Header  />
                <Search/>
                <Dropdown/>
                
                </div>
            </nav>
            <div className="main">
            <Component {...routeProps}></Component>
            </div>
            
        </React.Fragment>

     )}>   
       </Route>
}

const PublicRoute = ({component:Component,...rest})=>{
    return <Route {...rest} render={(routeProps)=>(

        <React.Fragment>
        
            
             <nav>
                <div className="nav-wrapper container-fluid"> 
                 <Header  />
                </div>
            </nav>
            
            
            <div className="main">
            <Component {...routeProps}></Component>
            </div>
            
        </React.Fragment>

     )}>   
       </Route>
}

 const Dashboard = ()=>{
    return (
        <h2>Here at dahboard
        
        </h2>
    )
}





export const Routing = ()=>{
    return (
        <Router>

           
           
            <Switch>
                
                <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
                <PublicRoute exact path='/' component={Login}></PublicRoute>
                <PublicRoute exact path='/register' component={Register}></PublicRoute>
                <PublicRoute exact path="/dy/:name"component= {Dynamic}></PublicRoute>
                <PublicRoute exact component= {PageNotFound}></PublicRoute>
                
            </Switch>
        </Router>
    )
}