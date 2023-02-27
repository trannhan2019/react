import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PHPIcon from "../../../assets/php.png";

const JobCard = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Stack direction={"row"} justifyContent="space-between">
            <Box display={"flex"} columnGap={1} alignItems="center" width="70%">
              <Avatar alt="php" src={PHPIcon} />
              <Typography variant="body1">
                Junior PHP Developer ~ 15-2...
              </Typography>
            </Box>
            <Chip label="Full-time" />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default JobCard;
