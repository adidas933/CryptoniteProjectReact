import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material';
import { CoinsProps } from '../Coins';
import './CoinCard.css';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CoinMoreInfo, MoreInfoState } from './CoinMoreInfo';
import { fetchMoreInfoCoin } from './fetchMoreInfoCoin';
import { CoinHeader } from '../../CoinAvatar/CoinHeader';
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton';
import { CoinDialog } from '../../CoinDialog/CoinDialog';

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
  const [favoriteCoins, setFavoriteCoins] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const favoriteCoinsFromStorage = JSON.parse(
      localStorage.getItem('favoriteCoins') || '[]'
    );
    setFavoriteCoins(favoriteCoinsFromStorage);
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFavoriteButtonClicked = () => {
    const favoriteCoinsFromStorage = JSON.parse(
      localStorage.getItem('favoriteCoins') || '[]'
    );
    if (favoriteCoinsFromStorage.length > 4) {
      setDialogOpen(true);
      // <Dialog favoriteCoinsFromStorage={favoriteCoinsFromStorage}/>
      /*    addModalContent(favoriteCoinsFromStorage);
      saveChangesBtn.on('click', function () {
        saveChanges(favoriteCoinsFromStorage);
        toggleFavoriteButtons(coin, favoriteBtn);
      });
      alertFavoritesModal.show(); */
    }
    const isFavorite = favoriteCoinsFromStorage.includes(coin.id);
    let newFavorites;
    if (!isFavorite) {
      newFavorites = [...favoriteCoinsFromStorage, coin.id];
    } else {
      newFavorites = favoriteCoinsFromStorage.filter(
        (id: string) => id !== coin.id
      );
    }
    localStorage.setItem('favoriteCoins', JSON.stringify(newFavorites));
    setFavoriteCoins(newFavorites);
  };

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
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ maxWidth: 345, height: '100%', backgroundColor: 'lightGrey' }}
      >
        <CoinHeader coin={coin} />
        <CardActions disableSpacing>
          <FavoriteButton
            isFavorite={favoriteCoins.includes(coin.id)}
            onClick={handleFavoriteButtonClicked}
          />
          <CoinDialog
            isOpen={dialogOpen}
            onClose={handleDialogClose}
            favoriteCoins={favoriteCoins}
          />
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
    </Grid>
  );
};
