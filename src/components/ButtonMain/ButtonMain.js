import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonMain = styled(Button)({
  boxShadow: 'none',
  display: 'block',
  margin: '20px auto 20px',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  color: 'rgba(0, 180, 249, 0.872)',
  borderColor: 'rgba(0, 180, 249, 0.872)',
  width: ['280px'].join(','),
  '&:hover': {
    backgroundColor: 'rgba(0, 180, 249, 0.872)',
    borderColor: 'rgba(0, 180, 249, 0.872)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 180, 249, 0.872)',
    borderColor: 'rgba(0, 180, 249, 0.872)',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0, 180, 249, 0.872)',
  },
});

export default ButtonMain;
