import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  isRemember: false,
  error: '',
  userProfile: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logingPending: (state) => {
      state.isLoading = true;
    },
    logingSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.userProfile = action.payload;
    },
    logingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logingRemember: (state, action) => {
      state.isRemember = action.payload;
    },
    logingOut: (state) => {
      state.isAuth = false;
      state.userProfile = {};
    },
  },
});

const { actions, reducer } = loginSlice;

export const {
  logingPending,
  logingSuccess,
  logingError,
  logingOut,
  logingRemember,
} = actions;

export default reducer;