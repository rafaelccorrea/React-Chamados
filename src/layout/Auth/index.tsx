import { Outlet } from 'react-router-dom'

import {
  MiniDrawer
} from '../../components'

import { Layout } from './styles'
export function AuthenticatedLayout () {
  return (
    <Layout>
      <MiniDrawer/>
        <Outlet />
    </Layout>
  )
}
