import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/form">Form</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
