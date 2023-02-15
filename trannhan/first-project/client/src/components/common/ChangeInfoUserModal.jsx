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

export default function ChangeInfoUserModal({ openInfo, handleCloseInfo }) {
  const [onRequest, setOnRequest] = useState(false);
  const form = useFormik({
    initialValues: { fullName: "", photo: {} },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Modal open={openInfo} onClose={handleCloseInfo}>
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
              Change Info User
            </Typography>
            <Box component="form" maxWidth="400px" onSubmit={form.handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  fullWidth
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  color="success"
                  error={
                    form.touched.fullName && form.errors.fullName !== undefined
                  }
                  helperText={form.touched.fullName && form.errors.fullName}
                />

                <TextField
                  type="file"
                  placeholder="Full Name"
                  name="photo"
                  fullWidth
                  value={form.values.photo}
                  onChange={form.handleChange}
                  color="success"
                  error={form.touched.photo && form.errors.photo !== undefined}
                  helperText={form.touched.photo && form.errors.photo}
                />

                <LoadingButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: 4 }}
                  loading={onRequest}
                >
                  update info
                </LoadingButton>
                <Button onClick={() => handleCloseInfo()}>Cancel</Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
