import React from 'react';
import {Routing} from './app.routing';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = function (){
    return (
        <React.Fragment>
            <Routing />
            <ToastContainer/>
        </React.Fragment>
    )
}



