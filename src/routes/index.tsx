import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteWrapper from "./Routes";
import { SignIn, SignUp, Dashboard } from "../pages";
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<RouteWrapper isPrivate={false} />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="/signup" element={<RouteWrapper isPrivate={false} />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<RouteWrapper isPrivate />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
