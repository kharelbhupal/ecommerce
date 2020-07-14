import React,{Component} from 'react';
import './register.css';
import {Link} from 'react-router-dom'

const defaultForm = {
    fullName:"",
    email:"",
    username:"",
    password:"",
    RePassword:"",
    permenantAddress:"",
    temporaryAddress:"",
    telephoneNo:"",
    mobileNo:"",
    dob:""
}

export class Register extends Component{
        constructor(props) {
        super(props);
        this.state = {
            data: {
                ...defaultForm
            },
            errMsg: {
                ...defaultForm,
            },
            isValidForm: false,
            isSubmitting: false
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(preState => ({
            data: {
                ...preState.data,
                [name]: value
            }
        }), () => {
            this.validateForm(name);
        })
    }
    validateForm(fieldName) {
        let errMsg;
        switch (fieldName) {
            case 'username':
                errMsg = this.state.data[fieldName]
                    ? ''
                    : 'Username is required';
                break;

            case 'email':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].includes('@')
                        ? ''
                        : 'Not an valid Email'
                    : 'Email is required';
                break;
            case 'password':
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].length > 6
                        ? ''
                        : 'Weak Password'
                    : 'Password is required'
                break;
            default:
                break;
        }

        this.setState(preState => ({
            error: {
                ...preState.error,
                [fieldName]: errMsg
            }
        }), () => {
            // check is the form valid or not
            const { error } = this.state;
            let errors = Object
                .values(error)
                .filter(item => item);
            // .filter(function (item) {
            //     if (item) {
            //         return true;
            //     }
            // })
            this.setState({
                isValidForm: errors.length === 0
            })

        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ isSubmitting: true });
        
            setTimeout(()=>{
                    this.setState({ isSubmitting: false });
                    this.props.history.push('/');
            },3000)
            
    

        
        
        // HttpClient
        //     .POST('/auth/register', this.state.data)
        //     .then((data) => {
        //         this.props.history.push('/');
        //         notify.showSuccess("Registration successfull please login!");
        //     })
        //     .catch((err) => {
        //         // send any error to error handling method
        //         notify.handleError(err);
        //     })
        //     .finally(() => {
        //         this.setState({ isSubmitting: false });
        //     })

    }

    // init update and destroy
    componentDidMount() {
        // it is a life cycle stage which will be executed once component fully loaded
        // console.log('props >>', this.props);
    }

    componentDidUpdate() {
        //     console.log('prev props >>', prevProps);
        //     console.log('prev state >>', prevState);
    }

 
    componentWillUnmount() {
        // life cycle stage which will run when the component is destroyed
        // console.log('component is destroyed');
    }

    render(){
        let btn = this.state.isSubmitting
        ?<button disabled={true} className="btn ourButton btn-info">Submitting</button>
        :<button disabled={!this.state.isValidForm} onClick={this.handleSubmit} className="btn ourButton btn-primary">Submit <i class="material-icons right">send</i></button>
        return (
        <div className="container registerPage">    
            
                <div className="heading">
                    <h4>Registraion form</h4>
                    
                </div>
            <div className="Registration-wrapper form-group">
                <div className="form-wrapper">

                    <form noValidate onSubmit={this.handleSubmit}>

                                            
                    
                        <div className="username">
                            <div className="col-md-12">
                                <label>Full Name *</label>
                                <input
                                    onChange={this.handleChange}
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                ></input>
                                <p className="danger">{this.state.errMsg.fullName}</p>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="mail col-md-12">
                                <label>Email *</label>
                                <input
                                    onChange={this.handleChange}
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                ></input>
                                <p className="danger">{this.state.errMsg.email}</p>
                            </div>
                        </div>

                        <div className="passwords">
                            <div className="password col-md-6">
                                <label>Password *</label>
                                <input
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    placeholder="Password"

                                ></input>
                                <p className="danger">{this.state.errMsg.password}</p>
                            </div>

                            <div className="repassword col-md-6">
                                <label>Re-Password *</label>
                                <input
                                    name="repassword"
                                    type="password"
                                    onChange={this.handleChange}
                                    placeholder="Re-Password"
                                    
                                ></input>
                                <p className="danger">{this.state.errMsg.repassword}</p>
                               
                            </div>
                        </div>

        
                    <br></br>
                    <div className="buttons">
                        {btn}
                        <p>Already have account ? <Link className="sign" to="/">Sign In</Link></p>
                    </div>
                    </form>
                </div>
                    
                    
        </div>
        </div>
        )
    }
}