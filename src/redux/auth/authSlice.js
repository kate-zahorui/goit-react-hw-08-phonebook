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
    // [authOperations.userRegister.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload.message;
    // },

    // ------------ userLogIn ------------
    [userLogIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // ------------ userLogOut ------------
    [userLogOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // ------------ fetchCurrentUser ------------
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
