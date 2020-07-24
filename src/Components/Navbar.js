import React from 'react'
import Logo from './assets/logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav id="navbar" class="">
                <div class="nav-wrapper">
                    <div class="logo">
                        <img src={Logo} className='logo' alt="logo" />
                    </div>
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
