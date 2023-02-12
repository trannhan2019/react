import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import userApi from "../api/modules/user.api";
import { setIsSignIn, setUser } from "../redux/features/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signupForm = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(6, "Full Name minimum 6 characters")
        .required("Full Name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .min(6, "password minimum 6 characters")
        .required("password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "confirmPassword not match")
        .min(6, "confirmPassword minimum 6 characters")
        .required("confirmPassword is required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, error } = await userApi.signup(values);
      // console.log(response, error);
      setIsLoginRequest(false);
      if (response) {
        signupForm.resetForm();
        dispatch(setIsSignIn(true));
        dispatch(setUser(response));
        toast.success("Sign in success");
      }
      if (error) setErrorMessage(error.message);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={signupForm.handleSubmit}
      noValidate
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={signupForm.values.fullName}
            onChange={signupForm.handleChange}
            error={
              signupForm.touched.fullName &&
              signupForm.errors.fullName !== undefined
            }
            helperText={
              signupForm.touched.fullName && signupForm.errors.fullName
            }
            type="text"
            autoComplete="given-name"
            name="fullName"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={signupForm.values.email}
            onChange={signupForm.handleChange}
            error={
              signupForm.touched.email && signupForm.errors.email !== undefined
            }
            helperText={signupForm.touched.email && signupForm.errors.email}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={signupForm.values.password}
            onChange={signupForm.handleChange}
            error={
              signupForm.touched.password &&
              signupForm.errors.password !== undefined
            }
            helperText={
              signupForm.touched.password && signupForm.errors.password
            }
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={signupForm.values.confirmPassword}
            onChange={signupForm.handleChange}
            error={
              signupForm.touched.confirmPassword &&
              signupForm.errors.confirmPassword !== undefined
            }
            helperText={
              signupForm.touched.confirmPassword &&
              signupForm.errors.confirmPassword
            }
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        sign up
      </LoadingButton>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link component={RouterLink} to="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined">
            {errorMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
}
