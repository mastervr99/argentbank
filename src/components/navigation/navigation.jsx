import './navigation.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="main-nav">
            <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </nav>
    );
}

export default Navigation;
