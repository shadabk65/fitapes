import React from 'react'
import Link from 'next/link'
function index() {
    return (
    <React.Fragment>
      <header class="header">
        <div class="container">
            <div class="header_inr">
                <div class="header_lft d-flex align-items-center">
                    <a href="#" class="logo"><img src="/images/logo.png" alt="logo"/></a>
                    <div class="menu_box">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#">How to work</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_rht ml-auto">
									<Link href='/Register'>
                    <a type="button" class="btn_base btn_black">Register</a>
									</Link>
                  <Link href='Login'>
										<a type="button" class="btn_base btn_blue login_btn">Login</a>
									</Link>
                </div>
                <div class="hamburge_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    

    <div class="sidebar">
        <div class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" class="active">About us</a></li>
                <li><a href="#">How to work</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
    </div>
    </React.Fragment>
  )
}
export default index;