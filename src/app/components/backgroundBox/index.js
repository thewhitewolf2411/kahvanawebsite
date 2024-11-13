'use client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import bestBg from '../../_static/bestBg.jpg';
import siteBg from '../../_static/siteBg.png';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${siteBg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // This keeps the image static while scrolling
}));

export default function Home({children}) {
  return (
    <BackgroundContainer>
        {children}
    </BackgroundContainer>
  );
}
