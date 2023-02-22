import { Box, Container, Stack } from "@mui/material";
import Hero from "../components/blog/hero/Hero";
import Categories from "../components/blog/category/Categories";
import Rightbar from "../components/rightbar/Rightbar";
import Recents from "../components/blog/recents/Recents";

function ResponsiveBlog() {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ResponsiveBlog;
