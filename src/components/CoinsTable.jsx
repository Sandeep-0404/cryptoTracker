import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";

import TextField from '@mui/material/TextField';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
       <h2
       style={{margin:18,fontFamily:"Montserrat"}}>
        Cryptocurrency Priecs by Market Cap
       </h2>

       {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
