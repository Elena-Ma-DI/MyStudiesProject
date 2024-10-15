import React, { useContext } from 'react';
import { Route, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 


const PrivateRoute = ({ children, ...rest }) => {
    const {currentUser} = useContext(AuthContext);

    let navigate = useNavigate();

    if (!currentUser) {
      navigate('/login');
      return null;
    }
  
return (
    <Route {...rest}>
    {children}
  </Route>
   
  );
};

export default PrivateRoute;