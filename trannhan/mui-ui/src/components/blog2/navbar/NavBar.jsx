import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <Box flex={3} sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuList />
          </Box>
          {/* menu */}
          {/* search */}
          <Box flex={2} sx={{ display: { xs: "none", md: "flex" } }}>
            <Search />
          </Box>
          {/* search */}
          {/* btn menu */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* btn menu */}
        </Toolbar>
        {/* right draw */}
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <Stack padding={2} gap={2}>
            <MenuList />
            <Divider />
            <Search />
          </Stack>
        </Drawer>
        {/* right draw */}
      </AppBar>
      <Stack
        paddingY={2}
        direction={{ md: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h5" align="center" mr={{ md: 1 }}>
          Simple Recipes made for Coders!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontFamily={"Splash , cursive"}
          color={"tomato"}
        >
          Simple Recipes made for Coders!
        </Typography>
      </Stack>
    </>
  );
}
