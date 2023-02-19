import { Alert, Box, Grid, Link, TextField } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import userApi from "../api/modules/user.api";
import { LoadingButton } from "@mui/lab";

export default function Forgot() {
  const [isRequest, setIsRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const form = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email(),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsRequest(true);
      const { response, error } = await userApi.forgot(values);
      setIsRequest(false);
      if (response) {
        form.resetForm();
        navigate("/");
        toast.success("Sended your password to email");
      }

      if (error) setErrorMessage(error.message);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        value={form.values.email}
        onChange={form.handleChange}
        error={form.touched.email && form.errors.email !== undefined}
        helperText={form.touched.email && form.errors.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isRequest}
      >
        Send Email Your Password
      </LoadingButton>
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
