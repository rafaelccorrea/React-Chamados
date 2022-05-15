import {
  MiniDrawer
} from '../../components'

import HeaderProps from './interface'
import {
  Container
} from './styles'

export default function defaultHeader (props: HeaderProps) {
  return (
      <Container>
        <MiniDrawer name="Rafael">
          { props.children }
        </MiniDrawer>
      </Container>
  )
}
