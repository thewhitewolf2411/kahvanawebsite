import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import DividerText from '../../../app/components/dividerText';
import Image from 'next/image';
import servicesPageBg from '../../../app/_static/servicesPageBg.jpg';
import { useRouter } from 'next/router';

const services = [
  {
    title: 'Marketing',
    description: `Through tailored marketing strategies, we help your brand build recognition and engagement in the market. Our goal is to create content that connects your audience to your brand on a deeper, emotional level.`,
  },
];

const projects = [
    { 
      title: 'Project 1', 
      img: 'https://picsum.photos/400/300'
    },
    { 
      title: 'Project 2', 
      img: 'https://picsum.photos/400/300' 
    },
    { 
      title: 'Project 3', 
      img: 'https://picsum.photos/400/300' 
    },
    { 
      title: 'Project 4', 
      img: 'https://picsum.photos/400/300' 
    },
  ];
  

const MarketingPage = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundImage: `url(${servicesPageBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 20,
      }}
    >
      {/* Section Header */}
      <DividerText showArrow onArrowClick={() => {router.back()}} color={"#000"}>Marketing</DividerText>

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mt: 6,
          gap: 4,
          px: { xs: 3, md: 6 },
        }}
      >
        {/* Left Side - Text Content */}
        <Box sx={{ flex: 1 }}>
          {services.map((service, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                {service.title}
              </Typography>
              <Typography variant="body1">{service.description}</Typography>
            </Box>
          ))}
        </Box>

        {/* Right Side - Image Gallery */}
        <Box
          sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 4,
            alignItems: 'center',
          }}
        >
          {projects.map((project, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  mb: 2,
                  backgroundColor: '#e0e0e0',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  layout="responsive"
                  width={200}
                  height={200}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MarketingPage;
