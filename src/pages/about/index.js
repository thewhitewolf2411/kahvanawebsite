import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import aboutBg from "../../app/_static/aboutBg.jpg";
import officeImg from "../../app/_static/officeImg.png";
import DividerText from '../../app/components/dividerText';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${aboutBg.src})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(20)
}));

const ContentBox = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  padding: theme.spacing(5),
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  color: '#FFFFFF',
  maxWidth: 600,
}));

const AboutUs = () => {
  return (
    <BackgroundBox>
      <DividerText>
        About Us
      </DividerText>
      <ContentBox maxWidth="lg">
        {/* Left Side - Text */}
        <TextBox>
          <Typography variant="body1" sx={{ mb: 3 }}>
            "At Kahvana, we are an agile team of tech experts passionate about
            innovation. Our mission is to deliver top-notch IT solutions that empower
            businesses in the digital age. With a dedicated group of software developers,
            network engineers, and cybersecurity specialists, we've successfully
            streamlined operations and enhanced security for our clients."
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Scroll down to meet us ↓
          </Typography>
        </TextBox>

        {/* Right Side - Image */}
        <Image
          src={officeImg}
          alt="Office"
          style={{ width: '100%', height: 'auto', display: 'block' }}>
        </Image>
      </ContentBox>
    </BackgroundBox>
  );
};

export default AboutUs;
