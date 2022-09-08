import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function WithAuthRedirect(Component, navigateTo) {
  const WithAuthRedirect = props => {
    const { isLoggedIn } = useSelector(state => state.auth);

    return isLoggedIn ? <Component {...props} /> : <Navigate to={navigateTo} />;
  };
  return WithAuthRedirect;
}

export default WithAuthRedirect;
