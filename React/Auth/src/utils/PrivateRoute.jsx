import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const authenticated = false; // Replace this with your actual authentication logic

  return authenticated ? (
    children
  ) : (
    <Navigate to={{ pathname: '/Login', state: { from: location } }} />
  );
};

export default PrivateRoute;
