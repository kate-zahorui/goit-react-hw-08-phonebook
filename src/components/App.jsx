import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
import { ContactsWithRedirect } from 'pages/Contacts/Contacts';
import { UserMenuWithRedirect } from 'pages/UserMenu/UserMenu';
import { LogIn } from 'pages/LogIn/LogIn';
import { SignUp } from 'pages/SignUp/SignUp';

import s from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={s.app}>
      <AppBar />
      <h1 className={s.app__title}>Phonebook</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contacts" element={<ContactsWithRedirect />} />
        <Route path="/usermenu" element={<UserMenuWithRedirect />} />
        {/* <Route path="*" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
};

export { App };
