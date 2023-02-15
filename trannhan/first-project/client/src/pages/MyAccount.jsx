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
import React from "react";

import { useSelector } from "react-redux";

export default function MyAccount() {
  const { user } = useSelector((state) => state.user);
  return (
    <Grid item xs={12}>
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Card sx={{ display: "flex" }}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={user?.photo}
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
                  <Button size="small">Change Info</Button>
                  <Button size="small">Change Password</Button>
                </Stack>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
}
