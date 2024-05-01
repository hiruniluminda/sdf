import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}></img>
            <p>BookStore</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("adults")}}><Link style={{textDecoration:'none'}} to='/adults'>Adults</Link>{menu==="adults"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("children")}}><Link style={{textDecoration:'none'}} to='/children'>Children</Link>{menu==="children"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("students")}}><Link style={{textDecoration:'none'}} to='/students'>Students</Link>{menu==="students"?<hr />:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon}></img></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
