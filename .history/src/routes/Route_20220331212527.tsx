import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
})