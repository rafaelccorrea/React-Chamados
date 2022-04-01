import SignInProps from './interface';
import Container from '@material-ui/core/Container';
import { Text } from './styles'

export default function Signin(props: SignInProps) {
    return (
      <Container maxWidth="sm">
        <Text>Login</Text>
      </Container>
    );
  }
  
  