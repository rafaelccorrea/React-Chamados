import { Routes,Route } from 'react-router-dom';
import RouteWrapper from './Routes';
import {
  SignIn,
  SingUp,
} from '../pages'
export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<RouteWrapper isPrivate={false}/>}>
                <Route path="/" element={<SignIn/>}/>
            </Route>
            <Route path="/register" element={<RouteWrapper isPrivate={false}/>}>
                <Route path="/register" element={<SingUp/>}/>
            </Route>            
            {/* <Route exact path="/dashboard" element={<RouteWrapper isPrivate/>}>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Route>  */}
        </Routes>
    )
}