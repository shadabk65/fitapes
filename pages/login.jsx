import React, { Component } from 'react'
import Link from 'next/link'
import Router from "next/router";


const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class login extends Component {

    constructor(props){
        super(props);

       this.state={
            email:'',
            password:'',
            errors:{}
       }

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }


   /*formvalidation = () =>{
        const {email , password} = this.state();
        let isValid=true;
        const errors={};


        if (!this.state.email) {
               errors.emailerror="enter valid email";   
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            errors.email = 'Email address is invalid';
          }


          if (!this.state.password) {
            errors.password = 'Password is required';
          } else if (this.state.password.length < 6) {
            errors.password = 'Password needs to be 6 characters or more';
          }

    }*/





    handleSubmit =(e)=>{
        e.preventDefault()
       // const isValid = this.formvalidation();
        Router.push('/doctor/profile')
    }


    render() {
        return (
            <div>
                <div className="login-page">
              <div className="login-page-inner">
                  <img src="/images/login.png" alt="img1"></img>
              </div>
              <div className="login-page-inner-1">
                  <div className="inner-2">
                      <div className="inner-2-img"><img src="/images/9.png" alt="login"  /></div>
                      <div className="inner-2-text">
                      <p>Still no account ?</p>
                      <Link href="/register"><a>Create new account</a></Link>
                  </div>
                  </div>

                <div className="inner-3">
                    <h1>Welcome</h1>
                    <p>Login to access all your Fitapes product</p>
                </div>
              
              <div className="container">
              <div className="login-form">
                  <form action="/doctor" onSubmit={this.handleSubmit}>
                      <div>
                          <label htmlFor="email">Username or email</label>
                          
                          <input type="text" name="email" placeholder="Username or email" autoComplete="off" id="email-1"
                              value ={this.state.email}
                              onChange = {this.handleChange}
                              
                              ></input>
                      </div>
                      <div>
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" placeholder="Password" autoComplete="off" id="password-1"
                            value ={this.state.password}
                            onChange = {this.handleChange}
                            ></input>
                      </div>
                      <div><Link href="/forgot"><a>Forgot password</a></Link></div>
                      <div className="submit-form"><button type="submit">Log in</button></div>
                  </form>
              </div>
              </div>
              </div>
          </div>
      </div>
        )
    }
}
