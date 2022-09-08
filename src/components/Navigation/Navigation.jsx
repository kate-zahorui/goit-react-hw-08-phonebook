import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.filter}>
      <NavLink to="/contacts" className={s.navLink}>
        Contacts
      </NavLink>
      <NavLink to="/usermenu" className={s.navLink}>
        User Menu
      </NavLink>
    </div>
  );
};

export { Navigation };
