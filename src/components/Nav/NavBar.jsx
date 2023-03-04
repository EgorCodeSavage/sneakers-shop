import "./style.css"

import logo from "./img/logo.jpg"
import search from "./img/search.png"
import user from './img/user.png'
import cart from "./img/cart.png"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

   

    return ( 
        <header className="navbar_container">
            <div className="navbar_inner">
                <img className="navgar_logo" src={logo} alt="logo" />
                <ul className="navbar_menu">
                    <NavLink to="/" className="navlink_nav">
                        <li className="isActive">
                            Footwear
                            <div className="dot"></div>    
                        </li>
                    </NavLink>
                        
                    <li className="">
                        About us
                        <div className=""></div> 
                    </li>
                    <li className="">
                        Products
                        <div className=""></div> 
                    </li>
                    <li className="">
                        Sale
                        <div className=""></div>     
                    </li>
                </ul>
                <ul className="navbar_icons">
                    <li className="search_icon"><img src={search} alt="search" /></li>
                    <li><img className="img2" src={user} alt="myaccount" /></li>
                    <li className="cart_icon">
                        <img src={cart} alt="cart" />
                        <div className="cart_itmes">3</div>
                    </li>
                </ul>
            </div>
        </header>
     );
}
 
export default NavBar;