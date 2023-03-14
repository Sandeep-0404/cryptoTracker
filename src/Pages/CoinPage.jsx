import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import './coinpage.css'
import CoinInfo from "../components/CoinInfo";
import { LinearProgress, Typography } from "@mui/material";
import { numberWithCommas } from "../components/CoinsTable";


const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  console.log(coin);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };


  function extractContent(s, space) {
    var span= document.createElement('span');
    span.innerHTML= s;
    if(space) {
      var children= span.querySelectorAll('*');
      for(var i = 0 ; i < children.length ; i++) {
        if(children[i].textContent)
          children[i].textContent+= ' ';
        else
          children[i].innerText+= ' ';
      }
    }
    return [span.textContent || span.innerText].toString().replace(/ +/g,' ');
  };


  useEffect(() => {
    fetchCoin();
  }, []);
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
 
  return (
    <div className="container">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />

        <h3 className="heading">
          {coin?.name}
        </h3>


        <p className="description">
        {extractContent(coin?.description.en.split(". ")[0],true)}
        </p>

        <div className="marketData">
          <span style={{ display: "flex" }}>
            <h5 className="headingSmall">
              Rank:
            </h5>
            &nbsp; &nbsp;
            <h5 className="detailsValue">
              {numberWithCommas(coin?.market_cap_rank)}
            </h5>
          </span>

          <span style={{ display: "flex" }}>
            <h5 className="headingSmall">
              Current Price:
            </h5>
            &nbsp; &nbsp;
            <h5 className="detailsValue"
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5 className="headingSmall">
              Market Cap:
            </h5>
            &nbsp; &nbsp;
            <h5 className="detailsValue"
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </h5>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
