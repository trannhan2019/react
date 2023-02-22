import cardImage from "../../../assets/images/image5.jpg";
import postImage2 from "../../../assets/images/image2.jpg";
import postImage1 from "../../../assets/images/image1.jpg";
import postImage3 from "../../../assets/images/image3.jpg";
import postImage4 from "../../../assets/images/image4.jpg";
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";

export default function Recents() {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage={postImage3} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage1} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage2} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={postImage4} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card cardImage={cardImage} />
        </Grid>
      </Grid>
    </Box>
  );
}
