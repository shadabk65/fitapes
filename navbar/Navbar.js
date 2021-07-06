import React, {useState} from 'react';
import Menulist from './Menulist';
import Link from 'next/link'
import Search from '../components/Search';

function Navbar() {

const[clicked , setclicked]= useState(false);

const menulist= Menulist.map(({url,title}, index ) =>{
		return(
				<li key={index}>
				<Link href={url}  ><a activeClassname="acttive">{title}</a></Link>
				</li>
		)
})
const handleClick=()=>{
		setclicked(!clicked)
}
return (
<React.Fragment>

		<nav id='nav'>
				<div className="container">
				<div className="row">
				<div className="col-md-8 col-sm-8">
				<div className="logo">
				<Link href="/"><a><img src="/images/logo.png" alt="logo-pic" /></a></Link>
				
				
				<div className="menu-icon" onClick={handleClick}>
						<i className={clicked ? "fa fa-times" : " fa fa-bars" }></i>
				</div>
				<ul className={clicked ? "menulist" : "menulist close"}>
						{menulist}
				</ul>
				</div>
			</div>


						<div className="col-md-4 col-sm-4">
						<ul className="register">
								<li>
										<Link href="/register"><a>Register</a></Link>
								</li>
								<li>
										<Link href="/login"><a>Login</a></Link>
								</li>
						</ul>
						</div>

						</div>
				</div>
		</nav>
		<Search />
</React.Fragment>
)
}

export default Navbar