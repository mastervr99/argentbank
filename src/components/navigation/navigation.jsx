import './navigation.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logingOut } from '../../pages/sign_in/loginSlice';

function Navigation() {
    const isAuth = useSelector((state) => state.login.isAuth);
    const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logingOut());
        navigate('/');
    };

    return (
        <nav className="main-nav">
            {isAuth ? (
                <div className="main-nav-item">
                    {userProfile && (
                        <span><i className="fa fa-user-circle"></i>{userProfile.firstname}</span>
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
        </nav>
    );
}

export default Navigation;
