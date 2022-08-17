import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = () => {
    const location = useLocation();
    const {user, admin, isLoading} = useAuth();

    if(isLoading) {return <CircularProgress />}
    return (
        user?.email && admin ? <Outlet /> :
        <Navigate to="/" state={{from: location}} />
    );
};

export default AdminRoute;