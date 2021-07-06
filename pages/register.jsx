import React, { Component } from 'react'
import Link from 'next/link'
import Router from "next/router";
import countryCode from '../components/country/countrycode';
import countrycode from '../components/country/countrycode';


export default class register extends Component {



    constructor(props){
        super(props);

       this.state={
           fullname:'',
            email:'',
            number:'',
            password:'',
            password1:''
       }

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        alert("sucess")

        Router.push('/login')

    }








    render() {
        return (
            <div>
                <div className="login-page">
                <div className="login-page-inner">
                    <img src="/images/14.png" alt="img1"></img>
                </div>
                <div className="login-page-inner-1">
                   <div className="inner-2">
                       <div className="inner-2-img"><img src="/images/9.png" alt="login"  /></div>
                       <div className="inner-2-text">
                        <p>Already have account  ?</p>
                        <Link href="/login"><a>Login</a></Link>
                    </div>
                   </div>

                 <div className="inner-3">
                     <h1>Create Account</h1>
                     <p>As a Associate you have the access to all service of FITAPES</p>
                 </div>
            
                 

                 <div className="container">
                <div className="login-form">
                    <form action="/doctor" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input 
                             type="text" 
                             name="fullname" 
                             placeholder="Full name" 
                             autoComplete="off" 
                             id="full-name-2"
                             value ={this.state.fullname}
                             onChange = {this.handleChange}
                               />
                        </div>

                        <div>
                            <label htmlFor="email">Email Addrress</label>
                            <input 
                             type="text" 
                             name="email" 
                             placeholder="Email" 
                             autoComplete="off" 
                             id="email-2"
                             value={this.state.email}
                             onChange={this.handleChange}
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="mobile no">Mobile Number</label>
                            <countryCode /><input 
                              type="text" 
                              name="number" 
                              placeholder="mobile number" 
                              autoComplete="off" 
                              id="mob-no-2"
                              value={this.state.number}
                             onChange={this.handleChange}
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                              type="password" 
                              name="password" 
                              placeholder="Password" 
                              autoComplete="off" 
                              id="password-2"
                              value={this.state.password}
                             onChange={this.handleChange}
                            
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="password">Confirm Password</label>
                            <input 
                              type="password" 
                              name="password1" 
                              placeholder="confirm Password" 
                              autoComplete="off" 
                              id="password-2"
                              value={this.state.password1}
                             onChange={this.handleChange}
                            
                            />
                        </div>

                        <div className="checkbox-1">
                            <input type="checkbox" name="privacy" id="check-box" />
                            <h6>Accept all Privacy and Policy</h6>
                        </div>


                        <div className="submit-form"><button type="submit">Sign Up</button></div>
                    </form>
                </div>
            </div>                
          </div>
        </div>



            </div>
        )
    }
}
