const BASE_URL = 'https://6317035682797be77ff07ba6.mockapi.io/contacts';

export const UserAPI = {
  fetchContacts: async () => {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      return new Error(response.status);
    }
    const contacts = await response.json();
    return contacts;
  },

  addNewContact: async contactToAdd => {
    const options = {
      method: 'POST',
      body: JSON.stringify(contactToAdd),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    const response = await fetch(`${BASE_URL}`, options);

    if (!response.ok) {
      return new Error(response.status);
    }
    const contact = await response.json();
    return contact;
  },

  deleteContact: async id => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return new Error(response.status);
    }
  },
};
