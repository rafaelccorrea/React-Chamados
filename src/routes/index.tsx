import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteWrapper from "./Routes";
import { SignIn, SignUp } from "../pages";
import { AuthenticatedLayout } from "../layout";

const Authenticated = true;
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {Authenticated ? (
          <>
            <Route path="/home" element={<RouteWrapper isPrivate />}>
              <Route path="/home" element={<AuthenticatedLayout />}/>
            </Route>
          </>
        ) : (
          <>
            <Route path="/signin" element={<RouteWrapper isPrivate={false} />}>
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route path="/signup" element={<RouteWrapper isPrivate={false} />}>
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
