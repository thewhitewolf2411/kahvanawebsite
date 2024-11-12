import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import portfolioBg from "../../app/_static/portfolioBg.jpg";
import image1 from "../../app/_static/portfolio/1.png";
import image2 from "../../app/_static/portfolio/2.png";
import image3 from "../../app/_static/portfolio/3.png";
import image4 from "../../app/_static/portfolio/4.png";
import image5 from "../../app/_static/portfolio/5.png";
import portfolioCardBg from "../../app/_static/portfolio/portfolioCardBg.jpg";
import DividerText from '../../app/components/dividerText';

const portfolioItems = [
  { name: 'Swipelix', logo: image1.src },
  { name: 'Cordoba', logo: image2.src },
  { name: 'Comp - 2000', logo: image3.src },
  { name: 'Europrofil', logo: image4.src },
  { name: 'Manage.it', logo: image5.src },
];

const Portfolio = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${portfolioBg.src})`,
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '160px'
      }}
    >
      <DividerText>
        Portfolio
      </DividerText>
      <Box container spacing={4} mt={6} mb={6} sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10%",
        width: "100%",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}>
        {portfolioItems.map((item, index) => (
          <Box item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Box sx={{
                backgroundImage: `url(${portfolioCardBg.src})`,
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '20px'
              }}>
                <Box sx={{
                  backgroundImage: `url(${item.logo})`,
                  backgroundSize: '100% 100%',
                  width: 200,
                  height: 200,
                }}/>
              </Box>
              <CardContent sx={{
                background: "#fff",
                color: "#000",
                fontWeight: 600
              }}>
                <Typography variant="h6">{item.name}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: '40px', fontWeight: 'bold', color: '#fff', textAlign: 'center' }} mt={12} mb={6}>
        <Typography variant="h5">NASA PROSLOST</Typography>
        <Typography variant="h5">NIJE TAJNA</Typography>
      </Box>
    </Box>
  );
};

export default Portfolio;