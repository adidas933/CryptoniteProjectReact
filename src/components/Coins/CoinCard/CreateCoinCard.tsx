import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from '@mui/material';
import { CoinsProps } from '../Coins';
import './CoinCard.css';
import React from 'react';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const handleExpandClick = () => {
    // fetch moreinfo coin data
    setExpanded(!expanded);
  };
  console.log(coin);
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
            <CardMedia component='img' height='' image='' alt='Coin image' />
            <Typography paragraph>Value in dollars:</Typography>
            <Typography paragraph>Value in Euro:</Typography>
            <Typography paragraph>Value in ILS:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
