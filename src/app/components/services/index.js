// Services.js
import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import DividerText from '../dividerText';

const services = [
  { title: 'Web App', description: 'Build robust web applications.' },
  { title: 'Marketing', description: 'Grow your business with targeted marketing.' },
  { title: 'SEO', description: 'Optimize your website for search engines.' }
];

const Services = () => {
  return (
    <Box sx={{ py: 6, color: '#fff', textAlign: 'center', marginBottom: 8 }}>
      <Box sx={{ marginTop: 8 }} />
      <DividerText>Services</DividerText>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 8 }}>
      <Box sx={{ px: 8, py: 6, display: 'flex', gap: 4 }}>
      {services.map((service, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            p: 4,
            textAlign: 'left',
            transition: 'all 0.3s ease-in-out',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#ffffff',
              color: '#000000',
              cursor: 'pointer',
            },
            '&:not(:last-child)::after': {
              content: '""',
              position: 'absolute',
              top: '10%',
              bottom: '10%',
              right: 0,
              width: '1px',
              backgroundColor: '#fff',
              opacity: 0.2,
            },
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {service.title}
          </Typography>
          <Divider sx={{ backgroundColor: '#fff', my: 2, width: '50px' }} />
          <Typography sx={{ mb: 3 }}>{service.description}</Typography>
          <Link color='#fff' underline="hover">More about this service &rarr;</Link>
        </Box>
      ))}
    </Box>
      </Box>
    </Box>
  );
};

export default Services;
