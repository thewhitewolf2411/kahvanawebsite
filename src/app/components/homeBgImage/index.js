import React from 'react';
import { Box, Typography } from '@mui/material';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';
import homeBg from "../../_static/homeBg.jpg";
import ServicesBanner from '../servicesBanner';
import GetInTouchButton from '../button';

const HomeBgImage = () => {
  const { language } = React.useContext(SidebarContext);
  const text = language === "bh" 
    ? `${bhStrings.homeTitleP1} ${bhStrings.homeTitleP2} ${bhStrings.homeTitleP3}` 
    : `${enStrings.homeTitleP1} ${enStrings.homeTitleP2} ${enStrings.homeTitleP3}`;
  const [displayedText, setDisplayedText] = React.useState('');
  const typingSpeed = 100; // ms per character

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index === text.length) clearInterval(interval); // Stop when complete
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Background Image with Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity to darken
            zIndex: 2,
          },
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          color: '#F9F8FED9',
        }}
      >
        <Box mt={40}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 600, width: '600px', mx: 'auto' }}
          >
            {displayedText}
          </Typography>
        </Box>
        <Box mt={3} mb={3}>
          <Typography variant="h5">
            {language === "bh" ? bhStrings.homeSubtitle1 : enStrings.homeSubtitle1}
          </Typography>
          <Typography variant="h5">
            {language === "bh" ? bhStrings.homeSubtitle2 : enStrings.homeSubtitle2}
          </Typography>
        </Box>
        <GetInTouchButton />
        <ServicesBanner />
      </Box>
    </Box>
  );
};

export default HomeBgImage;
