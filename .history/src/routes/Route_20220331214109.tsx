import { Routes, Route } from 'react-router-dom'

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

        </Routes>
    )
}