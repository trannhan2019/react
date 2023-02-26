import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Button,
  styled,
  Divider,
} from "@mui/material";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import Logo from "../../../assets/land_logo.png";

const LowCaseBtn = styled(Button)({
  textTransform: "none",
});

const Header = () => {
  return (
    <AppBar color="default" elevation={0} position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton>
            <img src={Logo} alt="logo" />
          </IconButton>
          <Stack direction={"row"} gap={3}>
            <LowCaseBtn>Tất Cả Các Job</LowCaseBtn>
            <LowCaseBtn
              variant="outlined"
              sx={{
                color: "blueMain.main",
                borderColor: "blueMain.main",
                textTransform: "none",
              }}
            >
              Đăng ký
            </LowCaseBtn>
            <Divider orientation="vertical" variant="fullWidth" />
            <LowCaseBtn
              color="blueMain"
              variant="contained"
              sx={{ color: "white" }}
            >
              Đăng Nhập
            </LowCaseBtn>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
