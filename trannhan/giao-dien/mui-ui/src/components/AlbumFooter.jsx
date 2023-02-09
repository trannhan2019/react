import { Box, Typography } from "@mui/material";
import Copyright from "../components/Copyright";

const AlbumFooter = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", p: 6 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
};

export default AlbumFooter;
