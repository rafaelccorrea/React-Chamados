import SignInProps from './interface';
import { Container, Text, Box } from './styles'
import { TextField } from '@material-ui/core';

export default function Signin(props: SignInProps) {
    return (
      <Container>
        <Box>
          <TextField
            label="Email"
            required
            type="text"
            placeholder="lets@email.com.br"
            size="small"
            variant='standard'
          />
        </Box>
      </Container>
    );
  }
  
  