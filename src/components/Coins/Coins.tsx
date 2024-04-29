import { useEffect, useState } from 'react';

import { FetchCoins } from './FetchCoins/FetchCoins';
import { CoinCard } from './CoinCard/CreateCoinCard';

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

        FetchCoins().then((fetchedCoins) => {
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
    <div>
      {coins.slice(0, 100).map((coin: CoinsProps) => (
        <CoinCard coin={coin}/>
      ))}
    </div>
  );
};
