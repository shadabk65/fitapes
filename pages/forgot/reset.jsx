
import style from '../../styles/forgot.module.css'
import Router from "next/router";

import React, { Component } from 'react'

export default class reset extends Component {

    constructor(props){
        super(props);

       this.state={
            password:'',
            password1:''
       }

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
  


        Router.push('/login')

    }


    render() {
        return (
            <div>
                 <div className={style.forgot_top}>
                    <div className={style.forgot_inner1}>
                        <h6>Create New Password</h6>
                        <form action="/login" onSubmit={this.handleSubmit}>
                        <input type="password" name="password" placeholder="New Password" autoComplete="off" id={style.email1}
                        value={this.state.password}
                        onChange={this.handleChange}
                        
                        />
                        <input type="password" name="password1" placeholder="Confirm password" autoComplete="off" id={style.email1}
                        value={this.state.password1}
                        onChange={this.handleChange}
                        
                        />
                        <div className={style.submitform}><button type="submit">Submit</button> </div>
                        </form>
                    </div>

            </div>
            </div>
        )
    }
}
