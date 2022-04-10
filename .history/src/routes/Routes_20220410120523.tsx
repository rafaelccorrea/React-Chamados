import { Outlet, Navigate } from "react-router-dom";
import RoutesProps from './interface'

export default function RouteWrapper(...RoutesProps)<any>{
    const signed = false
 
    if(!signed && props.isPrivate){
        return <Navigate to="/" />
    }
 
    if(signed && !props.isPrivate){
        return <Navigate to="/dashboard" />
    }
 
    return(
        <Outlet/>
    )
}