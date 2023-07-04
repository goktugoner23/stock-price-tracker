const coinStyles = {
    coinContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    coinRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      height: '80px',
      borderBottom: '1px solid #d7d7d7',
      width: '900px',
    },
    coin: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '24px',
      minWidth: '300px',
    },
    coinH1: {
      fontSize: '16px',
      width: '150px',
    },
    coinImg: {
      height: '30px',
      width: '30px',
      marginRight: '10px',
    },
    coinSymbol: {
      textTransform: 'uppercase',
    },
    coinData: {
      display: 'flex',
      textAlign: 'right',
      justifyContent: 'space-between',
      width: '100%',
    },
    coinPrice: {
      width: '110px',
    },
    coinVolume: {
      width: '155px',
    },
    coinMarketCap: {
      width: '230px',
    },
    coinPercent: {
      width: '100px',
    },
    red: {
      color: '#f00606',
    },
    green: {
      color: '#11d811',
    },
    '@media screen and (max-width: 768px)': {
      '.coin-row': {
        width: '500px',
      },
    },
  };
  
  export default coinStyles;
  