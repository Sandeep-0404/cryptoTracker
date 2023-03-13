import { makeStyles, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from './Carousel';

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom:15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color:"darkgrey",
              textTransform:"capitalize",
              fontFamily:"Montserrat",
              textAlign:"center"
            }}
          >
          Get All the info Regarding Your Favourite Crypto Currency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
};

export default Banner;
