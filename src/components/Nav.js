import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/portfolio'>
                <li>Portfolio</li>
                </Link>
                <Link to='/contact'>
                <li>Contact</li>
                </Link>

            </ul>

        </nav>
    );
}

export default Nav;