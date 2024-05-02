import { IconButton } from '@mui/material';
import './FavoriteButton.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite, onClick } = props;
  return (
      <IconButton aria-label='add to favorites' onClick={onClick}>
        <FavoriteIcon sx={{ color: isFavorite ? 'Crimson' : '' }} />
      </IconButton>
  );
};
