import {
  Avatar,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import PaidIcon from '@mui/icons-material/Paid';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface CustomDialogProps {
  favoriteCoinsFromStorage: string[];
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export const CustomDialog = ({
  favoriteCoinsFromStorage,
}: CustomDialogProps) => {
  const [favoriteStatus, setFavoriteStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const handleListItemClick = (coin: string) => {
    setFavoriteStatus((prevState) => ({
      ...prevState,
      [coin]: !prevState[coin],
    }));
    // Add push to an array and then to local storage
  };

  return (
    <div>
      <>
        <DialogTitle>Choose only 5 coins</DialogTitle>
        <List sx={{ pt: 0 }}>
          {favoriteCoinsFromStorage.map((coin) => (
            <ListItem disableGutters key={coin}>
              <ListItemButton onClick={() => handleListItemClick(coin)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PaidIcon />
                  </Avatar>
                </ListItemAvatar>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon
                    sx={{ color: favoriteStatus[coin] ? 'Crimson' : '' }}
                  />
                </IconButton>
                <ListItemText primary={coin} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick('addAccount')}
            ></ListItemButton>
            
          </ListItem>
        </List>
      </>
    </div>
  );
};
