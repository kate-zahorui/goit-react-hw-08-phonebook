import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  return (
    <li className={s.contact}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button
        type="button"
        onClick={() => onDeleteBtnClick(id)}
        className={s.button}
      >
        Delete
      </button>
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
