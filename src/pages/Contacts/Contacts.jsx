import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactItem } from '../../components/ContactList/ContactItem';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

import {
  addNewContact,
  deleteContact,
  getContacts,
} from '../../redux/contacts/contactsOperations';

import s from './Contacts.module.css';

const Contacts = () => {
  const { items, filter, isLoading, error } = useSelector(
    state => state.contacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const addContact = (name, number) => {
    if (items.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        name,
        number,
      };

      dispatch(addNewContact(newContact));
    }
  };

  const filterContacts = () => {
    if (items.length === 0 || !filter) return;

    const filterTerm = filter.toLowerCase();
    return items.filter(
      item =>
        item.name.toLowerCase().includes(filterTerm) ||
        item.number.toLowerCase().includes(filterTerm)
    );
  };

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = filterContacts();
  const contactsToRender = filter ? filteredContacts : items;

  const showContacts = contactsToRender.length > 0 && !error && !isLoading;
  const noContacts = contactsToRender.length === 0 && !error && !isLoading;

  return (
    <div>
      <ContactForm addContact={addContact} />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error.message}</p>}
      {showContacts && (
        <ContactList>
          {contactsToRender.map(item => (
            <ContactItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
              onDeleteBtnClick={removeContact}
            />
          ))}
        </ContactList>
      )}
      {noContacts && <p>You don't have any contacts.</p>}
    </div>
  );
};

const ContactsWithRedirect = WithAuthRedirect(Contacts, '/register');

export { ContactsWithRedirect };
