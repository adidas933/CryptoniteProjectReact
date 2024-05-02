// ExpandButton.jsx
import { IconButton, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
const ExpandButton = ({ onClick, expanded }) => {
  return (
    <IconButton
      aria-expanded={expanded}
      onClick={onClick}
      aria-label='show more'
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default ExpandButton;
