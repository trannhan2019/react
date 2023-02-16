import {
  Box,
  Button,
  Input,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

export default function ChangeInfoUserModal({ openInfo, handleCloseInfo }) {
  // const [onRequest, setOnRequest] = useState(false);
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: { fullName: "", photo: "" },
    validationSchema: Yup.object({}),
    onSubmit: async ({ fullName, photo }) => {
      const { response, error } = await userApi.updateInfo({ fullName, photo });
      if (error) toast.error(error.message);
      if (response) {
        dispatch(setUser(response));
        form.resetForm();
        handleCloseInfo();
        toast.success("Update user info success!");
      }
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
            <Box
              component="form"
              maxWidth="400px"
              onSubmit={form.handleSubmit}
              //encType="multipart/form-data"
            >
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
                <Box></Box>
                {
                  <Input
                    type="file"
                    name="photo"
                    fullWidth
                    onChange={(e) =>
                      form.setFieldValue("photo", e.currentTarget.files[0])
                    }
                    color="success"
                    error={
                      form.touched.photo && form.errors.photo !== undefined
                    }
                  />
                }

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: 4 }}
                  //loading={onRequest}
                >
                  update info
                </Button>
                <Button onClick={() => handleCloseInfo()}>Cancel</Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
