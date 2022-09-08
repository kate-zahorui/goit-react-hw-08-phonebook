import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/contacts/contactsSlice';
import s from './Filter.module.css';

const Filter = () => {
  const { filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.filter}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

export { Filter };
