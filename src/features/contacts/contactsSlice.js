import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await UserAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contacts = await UserAPI.addNewContact(newContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await UserAPI.deleteContact(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
    // getContacts
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
    // addNewContact
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
    // deleteContact
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
