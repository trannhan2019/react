import { Avatar, Grid, Link, Typography, Paper, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FooterCopyright from "../common/FooterCopyright";

export default function AuthLayout({ heading, children }) {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "grey[50]",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {heading}
          </Typography>
          {children}
        </Box>
        <FooterCopyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
}
