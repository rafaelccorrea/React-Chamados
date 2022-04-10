import { Routes,Route } from 'react-router-dom';
import RouteWrapper from './Routes';
import {
  SignIn,
  SignUp,
} from '../pages'
export default function Routess(){
    return(
        <Routes>
            <Route exact path="/" element={<RouteWrapper isPrivate={false}/>}>
                <Route exact path="/" element={<SignIn/>}/>
            </Route>
            <Route exact path="/register" element={<RouteWrapper isPrivate={false}/>}>
                <Route exact path="/register" element={<SignUp/>}/>
            </Route>            
            {/* <Route exact path="/dashboard" element={<RouteWrapper isPrivate/>}>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Route>  */}
        </Routes>
    )
}