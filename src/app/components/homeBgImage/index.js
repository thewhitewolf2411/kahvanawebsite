import React from 'react';
import { Box, Typography } from '@mui/material';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';
import homeBg from "../../_static/homeBg.jpg";
import homeBg2 from "../../_static/homeBg2.jpg";
import homeBg3 from "../../_static/homeBg3.jpg";
import ServicesBanner from '../servicesBanner';
import GetInTouchButton from '../button';
import { useRouter } from 'next/router';

const HomeBgImage = () => {
  const { language } = React.useContext(SidebarContext);
  const router = useRouter();
  const text = language === "bh" 
    ? `${bhStrings.homeTitleP1} ${bhStrings.homeTitleP2} ${bhStrings.homeTitleP3}` 
    : `${enStrings.homeTitleP1} ${enStrings.homeTitleP2} ${enStrings.homeTitleP3}`;
  
  const [displayedText, setDisplayedText] = React.useState('');
  const typingSpeed = 100; // ms per character
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);
  const backgrounds = [homeBg, homeBg2, homeBg3];
  const fadeDuration = 2000; // 1 second for the fade transition
  const changeInterval = 5000; // 5 seconds per background

  React.useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index === text.length) clearInterval(typingInterval); // Stop when complete
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, changeInterval);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handleApplyOnClick = () => {
    router.push("/#contact");
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Background Image with Fading Effect */}
      {backgrounds.map((bg, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: `opacity ${fadeDuration}ms ease-in-out`,
            opacity: currentBgIndex === index ? 1 : 0,
            zIndex: currentBgIndex === index ? 1 : 0, // Ensures the active image stays on top
            '::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity to darken
            },
          }}
        />
      ))}

      {/* Text Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
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
            sx={{
              fontWeight: 600,
              width: '100%', // Use 100% width on mobile
              mx: 'auto', // Center horizontally
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Adjust font size for different breakpoints
              textAlign: 'center', // Center the text on all devices
            }}
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
        <GetInTouchButton clickHandler={handleApplyOnClick}/>
        <ServicesBanner />
      </Box>
    </Box>
  );
};

export default HomeBgImage;
