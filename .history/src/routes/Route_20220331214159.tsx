import { Routes, Route } from 'react-router-dom'
import Signin from '../pages/Signin'

export default function RouteWrapper() {

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
        <Routes>
            <Route path="/login" element={ <Signin /> } />
        </Routes>
    )
}