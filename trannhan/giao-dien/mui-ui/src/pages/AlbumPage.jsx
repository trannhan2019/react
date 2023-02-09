import { Camera } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AlbumCard from "../components/AlbumCard";
import AlbumFooter from "../components/AlbumFooter";
import { cardsAlbum } from "../configs/album.card.configs";

const AlbumPage = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Camera sx={{ mr: 2 }} />
          <Typography variant="h6">Album Page</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* //Hero */}
        <Box sx={{ pt: 8, pb: 6, bgcolor: "Background" }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Album Page
            </Typography>
            <Typography
              align="center"
              variant="h5"
              paragraph
              color="text.secondary"
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <Stack
              direction="row"
              gap={2}
              justifyContent="center"
              sx={{ pt: 4 }}
            >
              <Button variant="contained">MAIN CALL TO ACTION</Button>
              <Button variant="outlined">SECONDARY ACTION</Button>
            </Stack>
          </Container>
        </Box>
        {/* //end hero */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cardsAlbum.map((card) => (
              <AlbumCard card={card} key={card.id} />
            ))}
          </Grid>
        </Container>
      </main>
      <AlbumFooter />
    </>
  );
};

export default AlbumPage;
