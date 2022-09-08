import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';

import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

const Appbar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <header>
      <AppBar color="secondary">
        {isLoggedIn ? <Navigation /> : <AuthNav />}
      </AppBar>
    </header>
  );
};

export { Appbar };
