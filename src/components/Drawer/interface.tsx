import { MuiAppBarProps } from "../../MaterialUI";

export default interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default interface DrawerProps {
  name?: string;
  children: any;
}
