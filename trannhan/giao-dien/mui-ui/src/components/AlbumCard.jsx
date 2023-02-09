import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function AlbumCard({ card }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia component="img" image={card.img} alt="random" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.heading}
          </Typography>
          <Typography>{card.content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
