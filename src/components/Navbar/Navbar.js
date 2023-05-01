import React from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return <header className='navbar'>
            <img className='logo' src={Logo} alt="little-lemon-logo" />
        <ul className='navbar-links'>
            <li >
                <NavLink to="#home">
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="#about">
                    ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink to="#menu">
                    MENU
                </NavLink>
            </li>
            <li><NavLink to="/booking">
                RESERVATIONS
            </NavLink>
            </li>
            <li>
                <NavLink to="#order-online">
                    ORDER ONLINE
                </NavLink>
                {/* <a href="#order-online">
                    ORDER ONLINE
                </a> */}
            </li>
            <li>
                <NavLink to="#login">
                LOGIN
            </NavLink>
            </li>
        </ul>
    </header>
};

export default Navbar;