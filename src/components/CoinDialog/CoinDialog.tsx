import { Button, Dialog, DialogActions } from '@mui/material';
import './CoinDialog.css';
import { CustomDialog } from '../Coins/CoinCard/CustomDialog';

interface CoinDialogProps {
  isOpen: boolean;
  favoriteCoins: string[];
  onClose: () => void;
}

export const CoinDialog = (props: CoinDialogProps) => {
  const { isOpen, favoriteCoins, onClose } = props;
  return (
    <Dialog open={isOpen}>
      <CustomDialog favoriteCoinsFromStorage={favoriteCoins} />
      <DialogActions>
        <Button onClick={onClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
