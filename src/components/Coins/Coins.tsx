import { useEffect, useState } from 'react';
import { fetchCoins } from './fetchCoins/fetchCoins';
import { CoinCard } from './CoinCard/CreateCoinCard';
import { Grid } from '@mui/material';

export interface CoinsProps {
  id: string;
  symbol: string;
  name: string;
}

export const Coins = () => {
  const [coins, setCoins] = useState<CoinsProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const coinsFromStorage = JSON.parse(
        localStorage.getItem('coins') || '[]'
      );

      if (coinsFromStorage.length === 0) {
        /*    <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>; */

        fetchCoins().then((fetchedCoins) => {
          localStorage['coins'] = JSON.stringify(fetchedCoins);
          setCoins(fetchedCoins);
        });
      } else {
        setCoins(coinsFromStorage);
      }
    };
    fetchData();
  }, []);

  return (
       <div style={{ padding: '0 16px' }}>
      <Grid container spacing={2}>
        {coins.slice(0, 100).map((coin: CoinsProps) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </Grid>
      </div>
  );
};
