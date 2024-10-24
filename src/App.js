import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Sign_In from './pages/sign_in/sign_in';
import User from './pages/user/user';
import Header from './layout/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logingSuccess } from './pages/sign_in/loginSlice';
import { profileSuccess } from './pages/user/profileSlice';
import { getToken, getUserProfile } from './services/authService';
function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuth);

  useEffect(() => {
    const token = getToken();
    const userProfile = getUserProfile();
    if (token && userProfile) {
      dispatch(logingSuccess({ token }));
      dispatch(profileSuccess(userProfile));
    } else {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
      <Router>
        <Header/>
        <div className='app_main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Sign_In/>} />
            <Route path="/profile" element={isAuthenticated ? <User /> : <Navigate to="/login" />} />          
          </Routes>
        </div>
      </Router>
    );
}

export default App;
