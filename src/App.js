import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Sign_In from './pages/sign_in/sign_in';
import User from './pages/user/user';
import Header from './layout/header/header';

function App() {
  return (
      <Router>
        <Header/>
        <div className='app_main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Sign_In />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
