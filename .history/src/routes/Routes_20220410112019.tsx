import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import SingUp from "../pages/SignUp";

export function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const loading = false;
  const signed = false;

  if (loading) {
    return <div></div>;
  }

  if (!signed && isPrivate) {
    return <Route path="/" />;
  }

  if (signed && !isPrivate) {
    return <Route path="/dashboard" />;
  }

  return (
    <Routes
        {...rest}
        render={ props => (
            <Component {...props} />
        )}
    />
  );
}
