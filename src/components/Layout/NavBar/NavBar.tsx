import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import './NavBar.css';
import Box from '@mui/material/Box';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const NavBar = () => (
  <Box sx={{ position: 'relative', zIndex: 1 }}>
    <AppBar
      position='fixed'
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='success'
          aria-label='menu'
          sx={{ mr: 2, color: '#00C853', fontSize: '30px' }}
        >
          <CurrencyBitcoinIcon sx={{ fontSize: 'inherit' }} />
        </IconButton>
        <Typography
          color='#00C853'
          variant='h4'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          Cryptonite
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Stack direction='row' spacing={2}>
          <Button
            sx={{ color: '#00C853', fontWeight: 'bold', fontSize: '20px' }}
          >
            Live Reports
          </Button>
          <Button
            sx={{ color: '#00C853', fontWeight: 'bold', fontSize: '20px' }}
          >
            About
          </Button>
          <Button
            sx={{ color: '#00C853', fontWeight: 'bold', fontSize: '20px' }}
          >
            Home
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
);
