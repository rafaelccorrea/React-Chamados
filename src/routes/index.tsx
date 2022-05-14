import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
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
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<RouteWrapper isPrivate />}>
              <Route path="/home" element={<AuthenticatedLayout />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route index element={<Navigate to="/signin" replace />} />
            <Route path="/signin" element={<RouteWrapper isPrivate={false} />}>
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route path="/signup" element={<RouteWrapper isPrivate={false} />}>
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
