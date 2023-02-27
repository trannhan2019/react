import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import React from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        mb={3}
      >
        <Box display={"flex"} alignItems="center" columnGap={1}>
          <FavoriteOutlinedIcon color="error" />
          <Typography variant="h4" component={"h3"}>
            Jobs tốt nhất
          </Typography>
        </Box>
        <Link>Xem Tất Cả</Link>
      </Stack>
      <Grid container>
        {Array(9)
          .fill(1)
          .map((x, i) => (
            <JobCard key={i} />
          ))}
      </Grid>
    </Container>
  );
};

export default Jobs;
