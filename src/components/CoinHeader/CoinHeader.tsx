import { Typography } from '@mui/material';
import './CoinHeader.css';
import { CoinsProps } from '../Coins/Coins';

export const CoinHeader = ({ name, symbol }: CoinsProps) => (
  <Typography variant='h6'>
    {name} ({symbol})
  </Typography>
);
