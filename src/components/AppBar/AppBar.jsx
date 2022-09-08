import { useSelector } from 'react-redux';

import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

import s from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return <header>{isLoggedIn ? <Navigation /> : <AuthNav />}</header>;
};

export { AppBar };
