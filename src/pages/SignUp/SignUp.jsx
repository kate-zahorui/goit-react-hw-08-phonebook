import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export { SignUp };
