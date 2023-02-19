import { Alert, Box, Grid, Link, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import userApi from "../api/modules/user.api";
import { setUser } from "../redux/features/userSlice";
import { LoadingButton } from "@mui/lab";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  //Forgot Password
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const signinForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, error } = await userApi.signin(values);
      setIsLoginRequest(false);
      if (response) {
        signinForm.resetForm();
        dispatch(setUser(response));
        navigate("/");
        toast.success("Sign in success");
      }

      if (error) setErrorMessage(error.message);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={signinForm.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        value={signinForm.values.email}
        onChange={signinForm.handleChange}
        error={
          signinForm.touched.email && signinForm.errors.email !== undefined
        }
        helperText={signinForm.touched.email && signinForm.errors.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        value={signinForm.values.password}
        onChange={signinForm.handleChange}
        error={
          signinForm.touched.password &&
          signinForm.errors.password !== undefined
        }
        helperText={signinForm.touched.password && signinForm.errors.password}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        Sign In
      </LoadingButton>
      <Grid container>
        <Grid item xs>
          <Link variant="body2" component={RouterLink} to="/forgot">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
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
