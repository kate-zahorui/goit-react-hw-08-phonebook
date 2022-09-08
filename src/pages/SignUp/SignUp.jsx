import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { nanoid } from 'nanoid';

import { userRegister } from '../../redux/auth/authOperations';
import s from './SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { isLoggedIn } = useSelector(state => state.auth);

  const signupNameId = nanoid();
  const signupEmailId = nanoid();
  const signupPasswordId = nanoid();

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
    dispatch(userRegister(formData));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign Up</h2>
      <form onSubmit={handleFormSubmit} className={s.form}>
        <label htmlFor={signupNameId} className={s.label}>
          Name
        </label>
        <input
          id={signupNameId}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={s.input}
          required
        />
        <label htmlFor={signupEmailId} className={s.label}>
          Email
        </label>
        <input
          id={signupEmailId}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={s.input}
          required
        />
        <label htmlFor={signupPasswordId} className={s.label}>
          Password
        </label>
        <input
          id={signupPasswordId}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={s.input}
          required
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export { SignUp };
