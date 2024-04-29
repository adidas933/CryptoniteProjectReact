import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material';
import { CoinsProps } from '../Coins';
import './CoinCard.css';
import React, { useState } from 'react';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CoinMoreInfo, MoreInfoState } from './CoinMoreInfo';
import { fetchMoreInfoCoin } from './fetchMoreInfoCoin';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface CoinCardProps {
  coin: CoinsProps;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [moreInfo, setMoreInfo] = useState<MoreInfoState | null>(null);

  const handleExpandClick = () => {
    if (!expanded) {
      const coinMoreInfoFromStorage = JSON.parse(
        localStorage.getItem(coin.id) || '[]'
      );
      if (coinMoreInfoFromStorage.length === 0) {
        fetchMoreInfoCoin(coin.id).then((fetchedCoins) => {
          localStorage.setItem(coin.id, JSON.stringify(fetchedCoins));
          setMoreInfo(fetchedCoins);
        });
      } else {
        setMoreInfo(coinMoreInfoFromStorage);
      }
      setExpanded(!expanded);
    } else {
      setMoreInfo(null);
    }
    setExpanded(!expanded);
  };
  return (
    <div className='CoinCard'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {coin.symbol}
            </Avatar>
          }
          title={coin.name}
        />
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            {moreInfo && <CoinMoreInfo moreInfoContent={moreInfo} />}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
