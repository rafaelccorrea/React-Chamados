import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../pages/Signin";
import SingUp from "../pages/SignUp";

export function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const loading = false;
  const signed = false;

  if (loading) {
    return <div></div>;
  }

  if (!signed && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<SingUp />} />
    </Routes>
  );
}
