import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export default function HomeNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={RouterLink} to="/signin">
              Sign In
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              component={RouterLink}
              to="/signup"
            >
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
