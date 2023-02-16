import { LoadingButton } from "@mui/lab";
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
import { useState } from "react";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { toast } from "react-toastify";

export default function ChangeInfoUserModal2({ openInfo, handleCloseInfo }) {
  const [onRequest, setOnRequest] = useState(false);
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState({});

  const handleInputText = (e) => setFullName(e.target.value);
  const handleInputFile = (e) => setPhoto(e.target.files[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response, error } = await userApi.updateInfo({ fullName, photo });
    if (error) toast.error(error.message);
    if (response) {
      toast.success("Update user info success!");
    }
  };

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
            <Stack>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => handleInputText(e)}
                />
                <input type="file" onChange={(e) => handleInputFile(e)} />
                <button type="submit">Change Info</button>
                <button onClick={() => handleCloseInfo()}>Close</button>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
