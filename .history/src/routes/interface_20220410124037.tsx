import { ComponentType } from "react";

export default interface RoutesProps {
  isPrivate: boolean;
  component?: ComponentType<void>;
}
