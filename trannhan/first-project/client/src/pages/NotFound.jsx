import { Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Stack height="100vh" justifyContent="center">
        <Typography textAlign="center" component="h2" variant="h3" gutterBottom>
          404
        </Typography>
        <Typography component="p" variant="h4" paragraph textAlign="center">
          Opppppsss, page not found.
        </Typography>
        <Button component={RouteLink} to="/">
          &larr; Back To Home
        </Button>
      </Stack>
    </Container>
  );
}
