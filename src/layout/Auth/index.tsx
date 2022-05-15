import { Outlet } from "react-router-dom";

import { Header } from "../../components";

import { Layout } from "./styles";
export function AuthenticatedLayout() {
  return (
    <Layout>
      <Header>
          <Outlet/>
      </Header>
    </Layout>
  );
}
