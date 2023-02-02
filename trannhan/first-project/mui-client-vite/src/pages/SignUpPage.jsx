import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container } from '@mui/material'


export default function SignUpPage() {
  return (
    <Container maxWidth="xs" component="main">
      <Box sx={{marginTop:8}}>
        <Avatar>
          <LockOutlined/>
        </Avatar>
      </Box>
    </Container>
  )
}
