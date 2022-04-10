import { Outlet, Navigate } from "react-router-dom";
import RoutesProps from './interface'

export default function RouteWrapper(props: RoutesProps){
    const component = props.element
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