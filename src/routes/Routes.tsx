import { Outlet, Navigate } from "react-router-dom";
import RoutesProps from "./interface";

export default function RouteWrapper({ isPrivate }: RoutesProps) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Navigate to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}
