import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogIn } from '../../redux/auth/authOperations';
import s from './LogIn.module.css';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(userLogIn(formData));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Log in</h2>
      <form action="" className={s.form} onSubmit={handleFormSubmit}>
        <label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Log in
        </button>
      </form>
    </div>
  );
};

export { LogIn };
