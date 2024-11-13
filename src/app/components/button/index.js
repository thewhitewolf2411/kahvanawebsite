import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ec0e6f',
  color: '#fff',
  borderRadius: '30px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: '#d20c63',
    transform: 'translateY(-3px)',
  },

  '&:active': {
    transform: 'translateY(0)',
  },
}));

const GetInTouchButton = ({ clickHandler }) => {
  return (
    <StyledButton onClick={clickHandler} endIcon={<SendIcon />}>
      Get in touch
    </StyledButton>
  );
};

export default GetInTouchButton;
