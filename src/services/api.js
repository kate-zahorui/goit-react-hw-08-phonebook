import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const UserAPI = {
  userRegisterRequest: async formData => {
    const response = await axios.post(`/users/signup`, formData);

    token.set(response.data.token);
    return response.data;
  },

  userLogInRequest: async formData => {
    const response = await axios.post(`/users/login`, formData);

    token.set(response.data.token);
    return response.data;
  },

  userLogOutRequest: async () => {
    const response = await axios.post(`/users/logout`);

    token.unset();
    return response;
  },

  fetchCurrentUser: async persistedToken => {
    token.set(persistedToken);

    const response = await axios.get(`/users/current`);

    return response.data;
  },

  fetchContacts: async () => {
    const response = await axios.get(`/contacts`);

    return response.data;
  },

  addNewContact: async contactToAdd => {
    const response = await axios.post(`/contacts`, contactToAdd);

    return response.data;
  },

  deleteContact: async id => {
    await axios.delete(`/contacts/${id}`);
  },
};
