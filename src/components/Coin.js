import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/coin';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    marginRight: '10px'
  };

  return (
    <div style={styles.coinContainer}>
      <div style={styles.coinRow}>
        <button
          className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
          onClick={handleFavoriteClick}
          style={buttonStyle}
        >
          <FaStar size={20} color={isFavorite ? styles.favorite.color : '#808080'} />
        </button>
        <img src={image} alt="crypto" style={styles.coinImg} />
        <h1 style={styles.coinH1}>{name}</h1>
        <p className="coin-symbol" style={styles.coinSymbol}>
          {symbol}
        </p>
        <div style={styles.coinData}>
          <p style={styles.coinPrice}>${price}</p>
          <p style={styles.coinVolume}>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red" style={styles.red}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green" style={styles.green}>
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p style={styles.coinMarketCap}>Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
