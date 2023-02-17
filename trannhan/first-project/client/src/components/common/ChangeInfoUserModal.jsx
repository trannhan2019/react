import {
  Box,
  Button,
  Input,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useFormik } from "formik";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

export default function ChangeInfoUserModal({ openInfo, handleCloseInfo }) {
  // const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const form = useFormik({
    initialValues: {
      fullName: user.fullName,
      photo: {},
      birthday: user.birthday,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(7, "Full Name minimum 7 characters")
        .required("Full Name is required"),
      photo: Yup.mixed().test(
        "fileFormat",
        "Only the following formats are accepted: .jpeg, .jpg, .png, .gif",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    }),
    onSubmit: async (values) => {
      const { response, error } = await userApi.updateInfo(values);
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

                <Input
                  type="file"
                  name="photo"
                  fullWidth
                  onChange={(e) =>
                    form.setFieldValue("photo", e.currentTarget.files[0])
                  }
                  color="success"
                  error={form.touched.photo && form.errors.photo !== undefined}
                />
                <Typography color={"error"}>
                  {form.touched.photo && form.errors.photo}
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    inputFormat="DD/MM/YYYY"
                    label="Your birthday"
                    value={form.values.birthday}
                    onChange={(value) =>
                      form.setFieldValue("birthday", value, true)
                    }
                    renderInput={(params) => (
                      <TextField name="birthday" {...params} />
                    )}
                  />
                </LocalizationProvider>

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
