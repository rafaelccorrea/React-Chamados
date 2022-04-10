// import { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
// import { AuthContext } from '../contexts/auth';
import RoutesProps from './interface'

export default function RouteWrapper(props: RoutesProps){
    // const { signed } = useContext(AuthContext);
    const signed = false
 
    if(!signed && props.isPrivate){
        return <Navigate to="/" />
    }
 
    if(signed && !props.isPrivate){
        return <Navigate to="/dashboard" />
    }
 
    return(
        <>
                    <h1>Teste</h1>
        <Outlet/>
        </>
    )
}