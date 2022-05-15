import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RouteWrapper from "./Routes";
import { SignIn, SignUp, HomePage } from "../pages";
import { AuthenticatedLayout } from "../layout";

const Authenticated = true;
export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {Authenticated ? (
          <>
            <Route path="/" element={<AuthenticatedLayout />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/" element={<RouteWrapper isPrivate />}></Route>
              <Route path="/home" element={ <HomePage /> } />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route element={<Navigate to="/signin" replace />}>
              <Route
                path="/signin"
                element={<RouteWrapper isPrivate={false} />}
              >
                <Route path="/signin" element={<SignIn />} />
              </Route>
              <Route
                path="/signup"
                element={<RouteWrapper isPrivate={false} />}
              >
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
