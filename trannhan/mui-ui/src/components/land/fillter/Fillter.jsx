import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const CsInput = styled(Input)({
  "&.MuiInput-root:before": { borderBottom: "none" },
});
const CsSelect = styled(Select)({
  "&.MuiInput-root:before": { borderBottom: "none" },
  "&. MuiSelect-select": { padding: "-1px 8px 1px" },
});

const Fillter = () => {
  return (
    <Box marginY={7}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <CsInput
                placeholder="Nhập vị trí hoặc từ khóa..."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} paddingLeft={2}>
            <Grid container>
              <Grid item xs={7} paddingRight={3}>
                <FormControl size="small" fullWidth>
                  <CsSelect
                    //   onChange={event => setAnswer(event.target.value)}

                    variant="standard"
                    startAdornment={
                      <PlaceOutlinedIcon position="start">
                        <SearchIcon />
                      </PlaceOutlinedIcon>
                    }
                    displayEmpty
                  >
                    <MenuItem value={undefined}>
                      <em>Hãy chọn địa điểm</em>
                    </MenuItem>
                    <MenuItem value={10}>Ho Chi Minh</MenuItem>
                    <MenuItem value={20}>Da Nang</MenuItem>
                  </CsSelect>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="blueMain"
                  sx={{ textTransform: "none", color: "white" }}
                >
                  Tìm Kiếm
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack></Stack>
      </Container>
    </Box>
  );
};

export default Fillter;
