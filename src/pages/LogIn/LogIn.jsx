import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

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
  const loginEmailId = nanoid();
  const loginPasswordId = nanoid();

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
        <label htmlFor={loginEmailId} className={s.label}>
          Email
        </label>
        <input
          id={loginEmailId}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={s.input}
          required
        />
        <label htmlFor={loginPasswordId} className={s.label}>
          Password
        </label>
        <input
          id={loginPasswordId}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={s.input}
          required
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
};

export { LogIn };
