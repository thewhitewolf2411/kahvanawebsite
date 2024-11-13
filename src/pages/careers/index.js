import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import DividerText from '../../app/components/dividerText';
import careersBg from "../../app/_static/careersBg.jpg";
import { SidebarContext } from '../../app/context/languageContext';
import { useRouter } from 'next/router';

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
  const router = useRouter()
  const { language } = React.useContext(SidebarContext)

  const handleApplyOnClick = () => {
    const pathname = "/#contact"
    router.push(pathname)
  }

  return (
    <MainContainer>
      <DividerText>
        {language === "bh" ? "Karijera" : "Careers"}
      </DividerText>

      <Box display="flex" sx={{padding: "24px"}}>

      <Box display="flex" justifyContent="center" gap={4} my={4} flexWrap="wrap">
        <JobCard elevation={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {language === "bh" ? "Full Stack" : "Full Stack"}
            </Typography>
            <Typography variant="body2">
              {language === "bh" ? "J/M/S - Puno radno vrijeme" : "J/M/S - Full time"}
            </Typography>
          </Box>
          <ApplyButton onClick={handleApplyOnClick} variant="contained">
            {language === "bh" ? "Prijavi se sada" : "Apply now"}
          </ApplyButton>
        </JobCard>

        <JobCard elevation={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {language === "bh" ? "Marketing" : "Marketing"}
            </Typography>
            <Typography variant="body2">
              {language === "bh" ? "J/M/S - Puno radno vrijeme" : "J/M/S - Full time"}
            </Typography>
          </Box>
          <ApplyButton onClick={handleApplyOnClick} variant="contained">
            {language === "bh" ? "Prijavi se sada" : "Apply now"}
          </ApplyButton>
        </JobCard>

        <JobCard elevation={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {language === "bh" ? "Opća prijava" : "General Application"}
            </Typography>
            <Typography variant="body2">
              {language === "bh" ? "J/M/S - Puno radno vrijeme" : "J/M/S - Full time"}
            </Typography>
          </Box>
          <ApplyButton onClick={handleApplyOnClick} variant="contained">
            {language === "bh" ? "Prijavi se sada" : "Apply now"}
          </ApplyButton>
        </JobCard>
      </Box>
        {/* Mission Statement */}
        <Box maxWidth="600px" margin="0 auto" textAlign="left" p={4} sx={{display: "flex", alignItems: "center" }}>
          <Typography variant="body1" color="#fff">
            {language === "bh"
              ? "Vjerujemo da je svaka ideja prilika za rast. Naš tim je mjesto gdje strast i kreativnost vode ka uspjehu. Ako ste motivirani, inovativni i želite raditi u okruženju koje podržava vaš profesionalni razvoj, pridružite nam se. Zajedno možemo stvoriti nešto posebno. Vaša prilika za rast počinje ovdje."
              : "We believe every idea is an opportunity for growth. Our team is a place where passion and creativity drive success. If you’re motivated, innovative, and eager to work in an environment that supports your professional development, join us. Together, we can create something special. Your opportunity to grow starts here."}
          </Typography>
        </Box>
      </Box>
      <Typography color="#fff" mt={4} mb={4} fontSize={17}>{language === "bh" ? "Čekamo te!" : "We are waiting for you!"}</Typography>
    </MainContainer>
  );
};

export default CareersPage;
