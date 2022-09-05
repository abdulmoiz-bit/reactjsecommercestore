import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartShopping, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    return (
        <header className='primary-header'>
            <div className="logo">
                <h3>Muzz Store</h3>
            </div>
            <nav>
                <ul id='primary-navigation' className='primary-navigation' data-visible='false' >
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <NavLink className="nav-link" to="/login">
                    <i className="bi bi-person-circle"></i>
                </NavLink>
                <NavLink className="nav-link" to="/cart">
                    <i className="bi bi-bag"></i>
                    <span className="black"> ({state.length})</span>
                </NavLink>
                <button className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded="false">
                    <i className="bi bi-list fa-lg"></i>
                </button>
            </div>
        </header>
    )
}

export default Navbar;