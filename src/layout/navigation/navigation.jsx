import './navigation.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logingOut } from '../../pages/sign_in/loginSlice';

function Navigation() {
    const isAuth = useSelector((state) => state.login.isAuth);
    const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = () => {
        dispatch(logingOut());
        navigate('/');
    };

    const toggleMenu = () => { setMenuOpen(!menuOpen); };

    return (
        <nav className="main-nav">
            <div className="menu-icon" onClick={toggleMenu}> 
                <i className="fa fa-bars"></i> 
            </div>
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                {isAuth ? (
                    <div className="main-nav-item">
                        {userProfile && (
                            <Link  to="/profile">
                                <span><i className="fa fa-user-circle"></i>{userProfile.firstname}</span>
                            </Link>
                        )}              
                        <button onClick={handleSignOut}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
