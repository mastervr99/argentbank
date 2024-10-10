import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userProfile: null,
    loading: false,
    error: null,
  },
  reducers: {
    profilePending: (state) => {
      state.loading = true;
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    },
    profileError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { profilePending, profileSuccess, profileError } = profileSlice.actions;
export default profileSlice.reducer;
