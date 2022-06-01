import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SignIn, SignUp, HomePage, ClientsPage } from "../pages";
import { AuthenticatedLayout } from "../layout";

import { AuthContext } from "../context/auth";

export default function Rotas() {
  const { authenticated }: any = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <>
          {authenticated ? (
            <>
              <Route path="/" element={<AuthenticatedLayout />}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/clients" element={<ClientsPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          ) : (
            <>
              <Route path="/auth/signin" element={<SignIn />} />
              <Route index element={<Navigate to="/auth/signin" replace />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/auth/signin" replace />} />
            </>
          )}
        </>
      </Routes>
    </BrowserRouter>
  );
}
