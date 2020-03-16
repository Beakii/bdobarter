import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const MyNavbar = () =>{
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link className="nav-link" to="/">
                        <span className="link-text">BDOBarter</span>
                        <i class="fas fa-chevron-right"></i>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i class="fas fa-home"></i>
                        <span className="link-text">Home</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/calculator">
                        <i class="fas fa-weight-hanging"></i>
                        <span className="link-text">Weight</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/boat">
                        <i class="fas fa-ship"></i>
                        <span className="link-text">Upgrade</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/calculator">
                        <i class="fas fa-link"></i>
                        <span className="link-text">Links</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MyNavbar;