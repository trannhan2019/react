import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

export default function ChangePasswordModal({
  openPassword,
  handleClosePassword,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [onRequest, setOnRequest] = useState(false);

  const form = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(7, "password minimum 7 characters")
        .required("password is required"),
      newPassword: Yup.string()
        .min(7, "newPassword minimum 7 characters")
        .required("newPassword is required"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "confirmNewPassword not match")
        .min(7, "confirmNewPassword minimum 7 characters")
        .required("confirmNewPassword is required"),
    }),
    onSubmit: async (values) => {
      if (onRequest) return;
      setOnRequest(true);
      const { response, error } = await userApi.updatePassword(values);

      setOnRequest(false);

      if (error) toast.error(error.message);
      if (response) {
        form.resetForm();
        navigate("/signin");
        dispatch(setUser(null));
        localStorage.removeItem("actkn");
        toast.success("Update password success! Please re-login");
      }
    },
  });

  return (
    <Modal open={openPassword} onClose={handleClosePassword}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "600px",
          padding: 4,
          outline: "none",
        }}
      >
        <Box
          sx={{
            padding: 4,
            boxShadow: 24,
            backgroundColor: "background.paper",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography variant="h4" component="h3">
              Change Password
            </Typography>
          </Box>
          <Box component="form" maxWidth="400px" onSubmit={form.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                type="password"
                placeholder="password"
                name="password"
                fullWidth
                value={form.values.password}
                onChange={form.handleChange}
                color="success"
                error={
                  form.touched.password && form.errors.password !== undefined
                }
                helperText={form.touched.password && form.errors.password}
              />
              <TextField
                type="password"
                placeholder="new password"
                name="newPassword"
                fullWidth
                value={form.values.newPassword}
                onChange={form.handleChange}
                color="success"
                error={
                  form.touched.newPassword &&
                  form.errors.newPassword !== undefined
                }
                helperText={form.touched.newPassword && form.errors.newPassword}
              />
              <TextField
                type="password"
                placeholder="confirm new password"
                name="confirmNewPassword"
                fullWidth
                value={form.values.confirmNewPassword}
                onChange={form.handleChange}
                color="success"
                error={
                  form.touched.confirmNewPassword &&
                  form.errors.confirmNewPassword !== undefined
                }
                helperText={
                  form.touched.confirmNewPassword &&
                  form.errors.confirmNewPassword
                }
              />

              <LoadingButton
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: 4 }}
                loading={onRequest}
              >
                update password
              </LoadingButton>
              <Button onClick={() => handleClosePassword()}>Cancel</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
