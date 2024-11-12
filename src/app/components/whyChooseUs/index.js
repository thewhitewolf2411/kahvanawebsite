import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import officeImg from "../../_static/officeImg.png";
import DividerText from '../dividerText';

const servicesText = `Text koji opisuje zasto smo najbolji. Mislim nece ici najbolji smo vec neki kontent, zavisno od kontent kreatora, sta zeli da bude, ali jasan je cilj, da prikazemo zasto bas mi.`;

const DotButton = styled(Button)({
  minWidth: 0,
  width: 12,
  height: 12,
  borderRadius: '50%',
  margin: '0 5px',
  backgroundColor: '#fff',
  opacity: 0.6,
  '&.active': {
    opacity: 1,
    backgroundColor: '#fff',
  },
});

const AnimatedBox = styled(Box)(({ theme }) => ({
  transition: 'all 0.8s ease-in-out',
}));

const WhyChooseUs = () => {
  const [activeDot, setActiveDot] = useState(0);  // Track which dot is active

  const handleToggle = (index) => {
    setActiveDot(index);
  };

  return (
    <Box sx={{ pt: 16, pb: 4, textAlign: 'center', position: 'relative', color: '#fff' }}>
      {/* Top text with clickable dots */}
      <DividerText>
        Why choose us?
      </DividerText>
      <Box sx={{ mb: 6, mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ mr: 2 }}>We are the best</Typography>
        {[0, 1, 2].map((_, index) => (
          <DotButton
            key={index}
            onClick={() => handleToggle(index)}
            className={activeDot === index ? 'active' : ''}
          />
        ))}
        <Typography sx={{ ml: 2 }}>We are the best</Typography>
      </Box>

      {/* Content area with animated switch */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <AnimatedBox
          sx={{
            flex: 1,
            transform: activeDot === 1 ? 'translateX(100%)' : 'translateX(0)',
            opacity: activeDot === 1 ? 1 : 1,
            padding: 4,
          }}
        >
          <Image
            src={officeImg}
            alt="Sample"
            width={400}
            height={400}
          />
        </AnimatedBox>
        
        <AnimatedBox
          sx={{
            flex: 1,
            transform: activeDot === 1 ? 'translateX(-100%)' : 'translateX(0)',
            opacity: activeDot === 1 ? 1 : 1,
            marginLeft: 0,
            padding: 4,
          }}
        >
          <Typography variant="body1">{servicesText}</Typography>
        </AnimatedBox>
      </Stack>
    </Box>
  );
};

export default WhyChooseUs;
