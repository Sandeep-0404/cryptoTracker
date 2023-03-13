import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const history = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const {currency,setCurrency}=CryptoState();

  console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className="title"
              onClick={() => {
                history("/");
              }}
              variant="h6"
              style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
            >
              Crypto Tracker
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                outlineColor: "#fff",
              }}
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
