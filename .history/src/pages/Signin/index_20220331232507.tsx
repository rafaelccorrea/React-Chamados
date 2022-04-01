import SignInProps from './interface';
import { Container, Text, Box } from './styles'
import { TextField } from '@material-ui/core';

export default function Signin(props: SignInProps) {
    return (
      <Container>
        <Box>
          <Text>Login</Text>
          <TextField
            required
            type="text"
            placeholder="Login"
          />
        </Box>
      </Container>
    );
  }
  
  