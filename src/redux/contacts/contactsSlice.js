import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  addNewContact,
  deleteContact,
} from './contactsOperations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // ------------ getContacts ------------

    [getContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload.length > 0) {
        state.items = action.payload;
      }
    },
    [getContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ addNewContact ------------

    [addNewContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [addNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    },
    [addNewContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ deleteContact ------------

    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
