import { configureStore } from '@reduxjs/toolkit';
import loginReducer  from './pages/sign_in/loginSlice';
import profileReducer  from './pages/user/profileSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
