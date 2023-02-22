import {
  AppBar,
  Box,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const MenuItems = [
  { Name: "Home", Link: "#" },
  { Name: "Recipes", Link: "#" },
  { Name: "About Us", Link: "#" },
  { Name: "Subscribe", Link: "#" },
];

const Search = () => {
  return <Input sx={{ width: "100%" }} placeholder="Search..." />;
};

const MenuList = () => {
  return (
    <List sx={{ display: "flex", maxWidth: "80%" }}>
      {MenuItems.map((item, idx) => (
        <ListItem key={idx} sx={{ padding: 0 }}>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "tomato",
                "& .MuiTypography-root": { color: "white" },
              },
              minWidth: "110px",
            }}
          >
            <ListItemText sx={{ textAlign: "center" }} primary={item.Name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default function NavBar() {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        {/* logo */}
        <Box flex={2}>
          <Link href="#" sx={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontFamily: "Splash , cursive",
                textAlign: { sm: "center", md: "left" },
                fontWeight: "bold",
              }}
              color={"tomato"}
              variant="h4"
            >
              CodingsTrade
            </Typography>
          </Link>
        </Box>
        {/* logo */}
        {/* menu */}
        <Box flex={3} sx={{ display: { sm: "none", md: "flex" } }}>
          <MenuList />
        </Box>
        {/* menu */}
        {/* search */}
        <Box flex={2} sx={{ display: { sm: "none", md: "flex" } }}>
          <Search />
        </Box>
        {/* search */}
        {/* btn menu */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="open drawer"
          sx={{ display: { sm: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* btn menu */}
      </Toolbar>
    </AppBar>
  );
}
