import { Menu } from '../'

import HeaderProps from './interface'
import {
  Header,
  Container,
  UserMenu,
  Img
} from './style'

export default function defaultHeader (props: HeaderProps) {
  return (
    <Header>
      <Container>
        {/* <Img/> */}
      </Container>
      <UserMenu>
        <h1>{props.name}</h1>
          <Menu/>
      </UserMenu>
    </Header>
  )
}
