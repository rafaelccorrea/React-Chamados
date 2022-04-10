import { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
import RoutesProps from './interface'

export default function RouteWrapper(RoutesProps){
    const { signed } = useContext(AuthContext);
 
    if(!signed && isPrivate){
        return <Navigate to="/" />
    }
 
    if(signed && !isPrivate){
        return <Navigate to="/dashboard" />
    }
 
    return(
        <Outlet/>
    )
}