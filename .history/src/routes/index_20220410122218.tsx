import { Routes,Route } from 'react-router-dom';
import RouteWrapper from './Routes';
import {
  SignIn,
  SingUp,
  Dashboard
} from '../pages'
export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<RouteWrapper isPrivate={false}/>}>
                <Route path="/" element={<SignIn/>}/>
            </Route>
            <Route path="/signup" element={<RouteWrapper isPrivate={false}/>}>
                <Route path="/signup" element={<SingUp/>}/>
            </Route>            
            <Route path="/dashboard" element={<RouteWrapper isPrivate/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route> 
        </Routes>
    )
}