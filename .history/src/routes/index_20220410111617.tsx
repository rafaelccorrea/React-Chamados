import { BrowserRouter } from "react-router-dom";
import { RouteWrapper } from "./Routes";

export function Router() {
  return (
    <BrowserRouter>
      <RouteWrapper/>
    </BrowserRouter>
  );
}
