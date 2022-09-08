import { createSlice } from '@reduxjs/toolkit';

import {
  userRegister,
  userLogIn,
  userLogOut,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    // userRegister
    // [authOperations.userRegister.pending]: (state, _) => {
    //   state.isLoading = true;
    //   state.error = '';
    // },
    [userRegister.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userRegister.rejected]: (state, action) => {
      state.error = action.payload.message;
    },

    // ------------ userLogIn ------------
    [userLogIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userLogIn.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    // ------------ userLogOut ------------
    [userLogOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [userLogOut.rejected]: (state, action) => {
      state.error = action.payload.message;
    },

    // ------------ fetchCurrentUser ------------
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
