// components/coinlist.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/coinlist";
import Coin from "./Coin";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.coinListContainer}>
      <div style={styles.coinSearch}>
        <input
          type="text"
          placeholder="Search a currency"
          className={styles.coinInput}
          onChange={handleChange}
        />
      </div>
      <div style={styles.coinList}>
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinList;
