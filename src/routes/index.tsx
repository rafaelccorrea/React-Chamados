import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SignIn, SignUp, HomePage } from "../pages";
import { AuthenticatedLayout } from "../layout";

import { AuthContext } from "../context/auth";

export default function Rotas() {
  const { authenticated }: any = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <>
        { authenticated ? (
            <>
            <Route path="/" element={<AuthenticatedLayout />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<SignIn />}>
              <Route index element={<Navigate to="/auth" replace />} />
              <Route path="/auth/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        )}
        </>
      </Routes>
    </BrowserRouter>
  );
}
