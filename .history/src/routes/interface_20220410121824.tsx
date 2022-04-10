import { ComponentType } from "react";

export default interface RoutesProps {
  isPrivate: boolean;
  component?: React.ComponentType<any> | ComponentType<any>;
  render?: (props: any) => React.ReactNode;
}
