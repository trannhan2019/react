import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Copyright from "../components/common/Copyright";

export default function SignUpPage() {
  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "username minimum 5 characters")
        .required("fullname is required"),
      password: Yup.string()
        .min(6, "password minimum 6 characters")
        .required("password is required"),
      email: Yup.string().email().required("email is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "confirmPassword not match")
        .min(6, "confirmPassword minimum 6 characters")
        .required("confirmPassword is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="xs" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "blueviolet" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          onSubmit={signupForm.handleSubmit}
          component="form"
          width="100%"
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                value={signupForm.values.name}
                onChange={signupForm.handleChange}
                type="text"
                label="Full Name"
                fullWidth
                required
                autoFocus
                autoComplete="on"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                value={signupForm.values.email}
                onChange={signupForm.handleChange}
                type="email"
                required
                label="Email Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                value={signupForm.values.password}
                onChange={signupForm.handleChange}
                type="password"
                required
                label="Your Password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                value={signupForm.values.confirmPassword}
                onChange={signupForm.handleChange}
                type="password"
                required
                label="Rewrite Your Password"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" href="#">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
