
import style from '../../styles/forgot.module.css'
import Router from "next/router";

import React, { Component } from 'react'

export default class forgot extends Component {

     
    constructor(props){
        super(props);

       this.state={
            email:''
       }

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault()


        Router.push('/forgot/otpverify')
    }
    








    render() {
        return (
            <div>
                <div className={style.forgot_top}>
                    <div className={style.forgot_inner}>
                        <h6>Verify Your Email</h6>
                        <form action="/otp" onSubmit={this.handleSubmit}>
                        <input type="text" name="email" placeholder="Username or email" autoComplete="off" id={style.email1}  
                        onChange={this.handleChange}
                        value ={this.state.email}
                        />
                        <div className={style.submitform}><button type="submit">Submit</button></div>
                        </form>
                    </div>

            </div> 
            </div>
        )
    }
}

