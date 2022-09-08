import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" replace />
      ) : (
        <Navigate to="/register" replace />
      )}
    </>
  );
};

export { NotFound };
