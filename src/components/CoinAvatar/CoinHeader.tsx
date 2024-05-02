import { Avatar, CardHeader, Typography } from '@mui/material';
import './CoinAvatar.css';
import { CoinsProps } from '../Coins/Coins';

interface CoinAvatarProps {
  coin: CoinsProps;
}

export const CoinHeader = (props: CoinAvatarProps) => {
  const { coin } = props;
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: '#B0E57C' }} aria-label='recipe'>
          {coin.symbol}
        </Avatar>
      }
      title={
        <Typography variant='h6'>
          {coin.name} ({coin.symbol})
        </Typography>
      }
    />
  );
};
