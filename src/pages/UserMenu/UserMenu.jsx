import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { userLogOut } from '../../redux/auth/authOperations';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn) return;
    navigate('/login');
  }, [isLoggedIn, navigate]);

  const handleBtnClick = e => {
    e.preventDefault();
    dispatch(userLogOut());
  };

  return (
    <div>
      <p className={s.text}>Email: {user.email}</p>

      <Button type="button" variant="contained" onClick={handleBtnClick}>
        Log Out
      </Button>
    </div>
  );
};

export { UserMenu };
const UserMenuWithRedirect = WithAuthRedirect(UserMenu, '/register');

export { UserMenuWithRedirect };
