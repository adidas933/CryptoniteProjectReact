import { Box, Button, Typography } from '@mui/material';
import cover from '../../images/backgroundImgCrypto.png';
import './Header.css';

export const Header = () => {
  return (
    <div className='Header'>

    <Box 
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        color: '#fff',
        zIndex: 0,
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
      }}
      >
      <div>
        <Typography variant="h1" gutterBottom>
          The future of money is here
        </Typography>
        <Typography variant="h4" gutterBottom>
          Today's Cryptocurrency Prices by <span style={{ color: '#00C853' }}>Cryptonite</span>
        </Typography>
        <Button variant="contained" color="success">
          About Us
        </Button>
      </div>
    </Box>
      </div>
  );
};
