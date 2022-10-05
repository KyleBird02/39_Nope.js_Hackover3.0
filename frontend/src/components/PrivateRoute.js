import React from 'react'
import { useAuth } from '../context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({role}) {
    const {user} = useAuth()
    return user.role===role ? <Outlet /> : <Navigate to="/signup" />;
}
