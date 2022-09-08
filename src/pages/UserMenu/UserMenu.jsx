import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
      <p>Email:{user.email}</p>
      <button type="button" onClick={handleBtnClick}>
        Log Out
      </button>
    </div>
  );
};

export { UserMenu };
const UserMenuWithRedirect = WithAuthRedirect(UserMenu, '/register');

export { UserMenuWithRedirect };
