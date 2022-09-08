import { NavLink } from 'react-router-dom';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import s from './AuthNav.module.css';

const AuthNav = () => {
  const [value, setValue] = React.useState('register');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={s.container}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
      >
        <Tab
          value="register"
          label={
            <NavLink to="/register" className={s.navLink}>
              Sign Up
            </NavLink>
          }
        />

        <Tab
          value="login"
          label={
            <NavLink to="/login" className={s.navLink}>
              Log In
            </NavLink>
          }
        />
      </Tabs>
    </div>
  );
};

export { AuthNav };
