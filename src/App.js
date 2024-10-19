import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Sign_In from './pages/sign_in/sign_in';
import User from './pages/user/user';
import Header from './layout/header/header';
import ProtectedRoute from './components/proctectedRoute/protectedRoute';
import { useDispatch } from 'react-redux';
import { checkAuth } from './pages/sign_in/loginSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
      <Router>
        <Header/>
        <div className='app_main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Sign_In />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />          
          </Routes>
        </div>
      </Router>
    );
}

export default App;
