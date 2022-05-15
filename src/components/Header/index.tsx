import {
  MiniDrawer
} from '../../components'

// import Logo from '~/assets/logo.svg'

import HeaderProps from './interface'
import {
  Container,
  Img
} from './styles'

export default function defaultHeader (props: HeaderProps) {
  return (
      <Container>
        <MiniDrawer name="Rafael">
          { props.children }
        </MiniDrawer>
        {/* <Img src={ Logo } alt="Logo"/> */}
      </Container>
  )
}
