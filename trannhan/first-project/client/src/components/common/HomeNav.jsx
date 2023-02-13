import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { setUser } from "../../redux/features/userSlice";

export default function HomeNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleToogle = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem("actkn");
    dispatch(setUser(null));
  };

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
          {user ? (
            <Stack direction="row">
              <IconButton size="large" color="inherit">
                <AccountCircle />
              </IconButton>
              <Button onClick={handleToogle} color="inherit">
                {user.fullName}
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => navigate("/admin")}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </Stack>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
