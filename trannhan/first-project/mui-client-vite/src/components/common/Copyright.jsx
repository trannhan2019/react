import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography align="center" variant="body2" {...props}>
      {"Copyright © "}
      <Link>trannhan.com</Link> {new Date().getFullYear()}
    </Typography>
  );
}
