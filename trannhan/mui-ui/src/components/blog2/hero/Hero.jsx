import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import meat from "../../../assets/images/meat.jpg";
import drinks from "../../../assets/images/drinks.jpg";
import burger from "../../../assets/images/burger1.jpg";
import appetizer from "../../../assets/images/appetizer.jpg";
import Category from "../categoryList/Category";

export default function Hero() {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: { height: 400 },
    [theme.breakpoints.down("md")]: { height: 200 },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledWrapper = styled(Box)(({ theme }) => ({
    width: "80%",
    position: "absolute",
    bottom: `-15px`,
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    backgroundColor: "tomato",
    fontSize: 20,
  });
  return (
    <Container>
      <Grid container columnSpacing={2} rowSpacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
            <StyledWrapper>
              <StyledTypography>Meat</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${appetizer})` }}>
            <StyledWrapper>
              <StyledTypography>Appetizer</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
            <StyledWrapper>
              <StyledTypography>Burger</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
            <StyledWrapper>
              <StyledTypography>Drinks</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
      <Category />
    </Container>
  );
}
