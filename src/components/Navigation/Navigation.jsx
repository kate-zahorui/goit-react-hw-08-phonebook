import { NavLink } from 'react-router-dom';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import s from './Navigation.module.css';

const Navigation = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={s.container}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={s.links}
      >
        <Tab
          value="one"
          label={
            <NavLink to="/contacts" className={s.navLink}>
              Contacts
            </NavLink>
          }
        />

        <Tab
          value="two"
          label={
            <NavLink to="/usermenu" className={s.navLink}>
              User Menu
            </NavLink>
          }
        />
      </Tabs>
    </div>
  );
};

export { Navigation };
