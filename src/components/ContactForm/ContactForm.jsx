import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const loginInputId = nanoid();
  const loginNumberId = nanoid();

  const handleInputChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className={s.contactForm}>
      <label htmlFor={loginInputId} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        id={loginInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor={loginNumberId} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        id={loginNumberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export { ContactForm };
