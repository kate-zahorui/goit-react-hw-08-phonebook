import PropTypes from 'prop-types';

const ContactList = ({ children }) => {
  return <ul>{children}</ul>;
};

ContactList.propTypes = {
  children: PropTypes.node,
};

export { ContactList };
