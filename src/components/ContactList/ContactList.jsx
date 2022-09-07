import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ children }) => {
  return <ul className={s.contactList}>{children}</ul>;
};

ContactList.propTypes = {
  children: PropTypes.node,
};

export { ContactList };
