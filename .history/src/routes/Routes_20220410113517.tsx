import { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
 
export function RouteWrapper({ 
    element:Element,
    isPrivate,
    ...rest
}){
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