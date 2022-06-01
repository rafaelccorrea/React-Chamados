import { Outlet } from "react-router-dom";

import { Header, MiniDrawer } from "../../components";

import { Layout } from "./styles";
import { AuthContext } from '../../context/auth'
import { useContext } from 'react';

export function AuthenticatedLayout() {
  const { user }: any = useContext(AuthContext)
  return (
    <Layout>
      <MiniDrawer />
      <div>
        <Header name={user.nome} />
        <Outlet />
      </div>
    </Layout>
  );
}
