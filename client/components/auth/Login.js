import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'

export default class Login extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            username: '',
            password: ''
        }
        this.input = this.input.bind(this);  
        // this.login = this.login.bind(this); 

    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.auth){
            this.props.history.push('/productManager')
        }
        
    }
    
    input(e) {
        this.setState({[e.target.name]:e.target.value})
    }

  render() {
    return (
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={(e)=>this.props.login(e,this.state.username,this.state.password)}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br></br>
                                <input type="text" name="username" id="username" className="form-control" value={this.state.username} onChange={this.input}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br></br>
                                <input type="text" name="password" id="password" className="form-control"  value={this.state.password}  onChange={this.input}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br></br>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"></input>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
  }
}
