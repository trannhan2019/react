import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChangeInfoUserModal from "../components/common/ChangeInfoUserModal";
import ChangeInfoUserModal2 from "../components/common/ChangeInfoUserModal2";
import ChangePasswordModal from "../components/common/ChangePasswordModal";

export default function MyAccount() {
  const { user } = useSelector((state) => state.user);

  const [openInfo, setOpenInfo] = useState(false);
  const handleCloseInfo = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpenInfo(false);
  };

  const [openPassword, setOpenPassword] = useState(false);
  const handleClosePassword = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpenPassword(false);
  };

  return (
    <>
      <ChangeInfoUserModal
        openInfo={openInfo}
        handleCloseInfo={handleCloseInfo}
        fullName={user.fullName}
      />
      <ChangePasswordModal
        openPassword={openPassword}
        handleClosePassword={handleClosePassword}
      />
      <Grid item xs={12}>
        <Container maxWidth="sm" sx={{ mt: 3 }}>
          <Card sx={{ display: "flex" }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  image={`http://localhost:5000/${user?.photo}`}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", padding: 1 }}
                >
                  <Typography>Full Name: {user?.fullName}</Typography>
                  <Typography>Email: {user?.email}</Typography>
                </Box>
                <CardActions>
                  <Stack direction="row" spacing={2}>
                    <Button onClick={() => setOpenInfo(true)} size="small">
                      Change Info
                    </Button>
                    <Button onClick={() => setOpenPassword(true)} size="small">
                      Change Password
                    </Button>
                  </Stack>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Grid>
    </>
  );
}
