import { Route, Outlet, Navigate } from "react-router-dom";
import RoutesProps from './interface'

export default function RouteWrapper({ isPrivate, component}: RoutesProps) {

    const signed = false
 
    if(!signed && isPrivate){
        return <Navigate to="/" />
    }
 
    if(signed && !isPrivate){
        return <Navigate to="/dashboard" />
    }
 
    return(
        <Route path={component}/>
    )
}