import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import DividerText from '../../app/components/dividerText';
import careersBg from "../../app/_static/careersBg.jpg";

// Define styles for main containers and components
const MainContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${careersBg.src})`,
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(20)
}));

const JobCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1, 0),
  borderRadius: '8px',
  backgroundColor: '#F5F5FA',
  width: '100%',
  maxWidth: '500px',
}));

const ApplyButton = styled(Button)({
  backgroundColor: '#FF4081',
  color: '#FFFFFF',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF1F61',
  },
});

const CareersPage = () => {
  return (
    <MainContainer>
      <DividerText>
        Careers
      </DividerText>

      <Box display="flex" sx={{padding: "24px"}}>

        <Box display="flex" justifyContent="center" gap={4} my={4} flexWrap="wrap">
          {/* Job Cards */}
          <JobCard elevation={3}>
            <Box>
              <Typography variant="h6" fontWeight="bold">Full Stack</Typography>
              <Typography variant="body2">J/M/S - Full time</Typography>
            </Box>
            <ApplyButton variant="contained">Apply now</ApplyButton>
          </JobCard>

          <JobCard elevation={3}>
            <Box>
              <Typography variant="h6" fontWeight="bold">Marketing</Typography>
              <Typography variant="body2">J/M/S - Full time</Typography>
            </Box>
            <ApplyButton variant="contained">Apply now</ApplyButton>
          </JobCard>

          <JobCard elevation={3}>
            <Box>
              <Typography variant="h6" fontWeight="bold">General Application</Typography>
              <Typography variant="body2">J/M/S - Full time</Typography>
            </Box>
            <ApplyButton variant="contained">Apply now</ApplyButton>
          </JobCard>
        </Box>

        {/* Mission Statement */}
        <Box maxWidth="600px" margin="0 auto" textAlign="left" p={4} sx={{display: "flex", alignItems: "center" }}>
          <Typography variant="body1" color="#fff">
            "At Kahvana, we are an agile team of tech experts passionate about innovation. Our mission is to deliver
            top-notch IT solutions that empower businesses in the digital age. With a dedicated group of software
            developers, network engineers, and cybersecurity specialists, we've successfully streamlined operations and
            enhanced security for our clients. Join us on our journey to harness technology's power and drive digital
            transformation with Kahvana as your trusted IT partner."
          </Typography>
        </Box>
      </Box>
      <Typography color="#fff" mt={4} mb={4} fontSize={17}>We are waiting for you!</Typography>
    </MainContainer>
  );
};

export default CareersPage;
