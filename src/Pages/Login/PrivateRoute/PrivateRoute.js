import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
    const location = useLocation();
    const {user, isLoading} = useAuth();

    if(isLoading) {return <CircularProgress />}
    return (
        user?.email ? <Outlet /> :
        <Navigate to="/login" state={{from: location}} />
    );
};

export default PrivateRoute;