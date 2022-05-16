import {
  MiniDrawer
} from '../../components'

import HeaderProps from './interface'
import {
  Container
} from './styles'

import { AuthContext } from "../../context/auth";
import { useContext } from 'react';

export default function defaultHeader (props: HeaderProps) {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user }: any = useContext(AuthContext);
  return (
      <Container>
        <MiniDrawer name={user.name}>
          { props.children }
        </MiniDrawer>
      </Container>
  )
}
