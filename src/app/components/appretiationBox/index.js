// AppreciationBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AppreciationBox = () => {
  return (
    <Box
      sx={{
        padding: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="h4" fontWeight={600} textAlign="center">
        Hvala što si došao do kraja ❤️
      </Typography>
    </Box>
  );
};

export default AppreciationBox;
