import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function MainHeader() {
  return (
    <>
    <AppBar>
        <Toolbar>
            <Typography sx={{flexGrow:1}}>MUI UI</Typography>
        <nav>
            <Button color="inherit" component={RouterLink} to="/signin" >Sign In</Button>
            <Button color="inherit" component={RouterLink} to="/signup">Sign Up</Button>
        </nav>
        </Toolbar>
    </AppBar>
    </>
  )
}
