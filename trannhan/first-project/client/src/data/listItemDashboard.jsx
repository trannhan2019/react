import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

export const listItemDashboard = (
  <>
    <ListItemButton component={RouteLink} to="">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={RouteLink} to="my-account">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItemButton>
  </>
);
