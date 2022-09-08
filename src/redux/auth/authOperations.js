import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/api';

export const userRegister = createAsyncThunk(
  'contacts/userRegister',
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const data = await UserAPI.userRegisterRequest(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'contacts/userLogIn',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await UserAPI.userLogInRequest(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'contacts/userLogOut',
  async (_, { rejectWithValue }) => {
    try {
      await UserAPI.userLogOutRequest();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'contacts/fetchCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const response = await UserAPI.fetchCurrentUser(persistedToken);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
