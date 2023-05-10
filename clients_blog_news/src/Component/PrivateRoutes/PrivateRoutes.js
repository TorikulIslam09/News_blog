import React, { useContext } from 'react';
import { authContext } from '../Global_hooks/Global_hook';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(authContext);

    if(user && user.uid) {
       return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;