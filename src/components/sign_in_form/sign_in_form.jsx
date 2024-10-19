import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { logingPending, logingSuccess, logingError, logingRemember  } from '../../pages/sign_in/loginSlice';
import { login, getProfile, storeToken } from '../../services/authService';
import { loginModel } from '../../services/models/loginModel';
import { loginResponseModel } from '../../services/models/loginResponseModel';
import { userProfileModel } from '../../services/models/userProfileModel';
import { profileSuccess } from '../../pages/user/profileSlice';
import './sign_in_form.scss';

function Sign_In_Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.login.error);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logingPending());
    try {
      const loginData = loginModel(email, password);
      const result = await login(loginData);

      if (result.error) {
        dispatch(logingError(result.error));
      } else {
        const formattedLoginResponse = loginResponseModel(result);
        storeToken(formattedLoginResponse.token, rememberMe);
        dispatch(logingRemember(rememberMe));
        dispatch(logingSuccess(formattedLoginResponse));
        const profile = await getProfile(formattedLoginResponse.token);

        if (profile.error) {
          dispatch(logingError(profile.error));
        } else {
            const userProfile = userProfileModel(profile);

            if (userProfile) {
                dispatch(profileSuccess(userProfile));
                navigate('/profile', { state: { userProfile } });
            } else {
                console.error("userProfile is undefined");
            }
        }
      }
    } catch (error) {
      dispatch(logingError(error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />        
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
}

export default Sign_In_Form