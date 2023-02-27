import { Box } from "@mui/material";
import HeroImg from "../../../assets/Hero.png";

const Hero = () => {
  return (
    <Box
      component={"section"}
      sx={{
        height: "721px",
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition:'center'
      }}
    />
  );
};

export default Hero;
