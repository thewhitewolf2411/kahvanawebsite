import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import devIcon from "../../../app/_static/dev.png";
import markIcon from "../../../app/_static/mark.png";
import uxuiIcon from "../../../app/_static/uxui.png";
import seoIcon from "../../../app/_static/seo.png";

// Define styles
const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F5F5FA', // Light background color
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

const ServiceBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  flex: 1,
  width: '200px', // Controls the width of each box
}));

const ServiceIcon = styled('img')({
  width: '100px',
  height: '100px',
  marginBottom: '1rem',
});

const ServicesBanner = () => {
  return (
    <Container elevation={3}>
      <ServiceBox>
        <ServiceIcon src={devIcon.src} alt="Development Icon" />
        <Typography variant="h6" fontWeight="bold">Development</Typography>
        <Typography variant="body2">We offer mobile & web development</Typography>
      </ServiceBox>
      <Divider orientation="vertical" flexItem sx={{ mx: 0 }} />
      <ServiceBox>
        <ServiceIcon src={markIcon.src} alt="Marketing Icon" />
        <Typography variant="h6" fontWeight="bold">Marketing</Typography>
        <Typography variant="body2">We offer marketing & digital support</Typography>
      </ServiceBox>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <ServiceBox>
        <ServiceIcon src={uxuiIcon.src} alt="UI/UX Icon" />
        <Typography variant="h6" fontWeight="bold">UI/UX</Typography>
        <Typography variant="body2">We offer UI & UX design</Typography>
      </ServiceBox>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <ServiceBox>
        <ServiceIcon src={seoIcon.src} alt="SEO Icon" />
        <Typography variant="h6" fontWeight="bold">SEO</Typography>
        <Typography variant="body2">We offer SEO & other services</Typography>
      </ServiceBox>
    </Container>
  );
};

export default ServicesBanner;
