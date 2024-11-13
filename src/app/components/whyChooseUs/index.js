import React, { useState, useContext } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import officeImg from "../../_static/officeImg.png";
import DividerText from '../dividerText';
import { SidebarContext } from '../../context/languageContext'; // Assume this is your language context

const DotButton = styled(Button)({
  minWidth: 0,
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: '#fff',
  opacity: 1,
  '&.active': {
    opacity: 1,
    backgroundColor: '#fff',
  },
});

const AnimatedBox = styled(Box)(({ theme }) => ({
  transition: 'all 0.8s ease-in-out',
}));

const WhyChooseUs = () => {
  const { language } = useContext(SidebarContext);
  const [activeDot, setActiveDot] = useState(0);

  const handleToggle = (index) => {
    setActiveDot(index);
  };

  const titles = language === 'bh' 
    ? ['Inovacije', 'Kontrola', 'Stručnost']
    : ['Innovation', 'Control', 'Expertise'];

  const descriptions = language === 'bh'
    ? [
        'Mi se trudimo da pratimo i primjenjujemo najnovije tehnologije u digitalnom oglašavanju. Kroz jednostavna, ali učinkovita rješenja, pomažemo vam da ostvarite bolje rezultate i povežete se s vašom publikom.',
        'Pružamo vam jasnu sliku cijelog procesa. Naši alati omogućavaju jednostavno praćenje kampanja, tako da imate potpunu kontrolu i možete donijeti informirane odluke.',
        'Naš tim je tu da vas podrži u svakoj fazi. Posvećeni smo razumijevanju vaših ciljeva i kreiranju rješenja koja vam stvarno pomažu da postignete ono što želite, bez puno komplikacija.',
      ]
    : [
        'We strive to stay up to date with the latest technologies in digital advertising. Through simple yet effective solutions, we help you achieve better results and connect with your audience.',
        'We provide you with a clear view of the entire process. Our tools allow for easy tracking of campaigns, giving you full control so you can make informed decisions.',
        'Our team is here to support you at every stage. We are dedicated to understanding your goals and creating solutions that truly help you achieve what you want, without unnecessary complications.',
      ];

  return (
    <Box sx={{ pt: 16, pb: 4, textAlign: 'center', position: 'relative', color: '#fff' }}>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: -125,
          left: 0,
          right: 0,
          height: '250px', // Adjust height for the fade effect
          background: 'linear-gradient(to bottom, transparent 0%, black 33%, black 66%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Divider Text */}
      <DividerText>
        {language === 'bh' ? 'Zašto izabrati nas?' : 'Why choose us?'}
      </DividerText>

      {/* Dots and Line */}
      <Box sx={{ mb: 6, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '65%',
            mb: 2,
          }}>
          {[0, 1, 2].map((index) => (
            <Typography
              variant="h5"
              sx={{
                color: activeDot === index ? 'white' : 'gray',
                mt: 1,
              }}
            >
              {titles[index]}
            </Typography>
          ))}
        </Box>      
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '60%',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              width: '100%',
              height: '2px',
              backgroundColor: 'gray',
              opacity: 0.6,
              zIndex: 1,
            }}
          />
        
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {/* Dot Buttons */}
          {[0, 1, 2].map((index) => (
            <Box key={index} sx={{ textAlign: 'center', zIndex: 2 }}>
              <DotButton
                onClick={() => handleToggle(index)}
                className={activeDot === index ? 'active' : ''}
                sx={{
                  backgroundColor: activeDot === index ? 'black' : 'gray',
                  width: '36px',
                  height: '36px',
                }}
              />
            </Box>
          ))}
          </Box>
        </Box>
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
          <Typography variant="body1">{descriptions[activeDot]}</Typography>
        </AnimatedBox>
      </Stack>
    </Box>
  );
};

export default WhyChooseUs;
