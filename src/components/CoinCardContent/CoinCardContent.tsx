import { Collapse, CardContent } from '@mui/material';
import { CoinMoreInfo } from '../Coins/CoinCard/CoinMoreInfo';

const CoinCardContent = ({ expanded, moreInfo }) => {
  return (
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <CardContent>
        {moreInfo && <CoinMoreInfo moreInfoContent={moreInfo} />}
      </CardContent>
    </Collapse>
  );
};

export default CoinCardContent;
