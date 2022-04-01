import { Switch, Route } from 'react-router-dom'
import Signin  from '../pages/Signin'

export function RouteWrapper() {

    const loading = false
    const signed = false
    const isPrivate = false

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){
        return(
            <Route path='/' />
        )
    }

    if(signed && !isPrivate){
        return (
            <Route path='/dashboard' />
        )
    }

    return(
        <Switch>
            <Route path="/" element={ <Signin /> } />
        </Switch>
    )
}