import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import s from './ContactList.module.css';

const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  return (
    <li className={s.contact}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>

      <Button
        type="button"
        onClick={() => onDeleteBtnClick(id)}
        className={s.button}
        variant="outlined"
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export { ContactItem };
