import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink to="/register" className={s.navLink}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={s.navLink}>
        Log In
      </NavLink>
    </div>
  );
};

export { AuthNav };
