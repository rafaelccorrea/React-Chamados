import { Navigate, Route } from "react-router-dom";
import RoutesProps from './interface'

export default function RouteWrapper({ render, isPrivate, ...rest}: RoutesProps) {

    const signed = false
 
    if(!signed && isPrivate){
        return <Navigate to="/" />
    }
 
    if(signed && !isPrivate){
        return <Navigate to="/dashboard" />
    }
 
    return(
        <Route {...rest} 
            render={ props => (
                <Component {...props}/>
            )}
        />
    )
}