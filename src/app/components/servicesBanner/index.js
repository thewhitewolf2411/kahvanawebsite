import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';
import devIcon from "../../../app/_static/dev.png";
import markIcon from "../../../app/_static/mark.png";
import uxuiIcon from "../../../app/_static/uxui.png";
import seoIcon from "../../../app/_static/seo.png";

// Define styles
const ServiceBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  flex: 1,
  width: '100%', // Default width is 100% (to take full width on small screens)
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#381e78',
    borderRadius: theme.shape.borderRadius * 2,
    color: '#FFFFFF',
    '& img': {
      filter: 'brightness(0) invert(1)', // Inverts icon color to white
    },
  },
  // Add responsive width using the sx prop for different breakpoints
  [theme.breakpoints.down('sm')]: {
    width: '150px', // Set width to 200px on small screens and up (sm and above)
    maxWidth: '150px',
  },
}));

const StyledLink = styled(Link)(({ theme }) =>({
  textDecoration: 'none',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '150px', // Set width to 200px on small screens and up (sm and above)
  },
}));

const ServiceIcon = styled('img')(({ theme }) =>({
  width: '100px',
  height: '100px',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '75px', // Set width to 200px on small screens and up (sm and above)
    maxWidth: '75px',
    height: '75px',
  },
}));

const ServicesBanner = () => {
  const { language } = React.useContext(SidebarContext);
  const strings = language === "bh" ? bhStrings : enStrings;

  return (
    <Box
      justifyContent="space-around"
      mt={4}
      mb={4}
      p={4}
      sx={{
        display: { xs: 'grid', sm: 'flex' },
        flexWrap: 'wrap', // Allow wrapping of items to next line
        flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on small screens, row on larger screens
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'none' },
        gridGap: { xs: '20px', sm: 'none' },
        width: { xs: '100%' }
      }}
    >
      <StyledLink href="/services/development">
        <ServiceBox>
          <ServiceIcon src={devIcon.src} alt="Development Icon" />
          <Typography variant="h6" fontWeight="bold" color='#fff'>
            {strings.servicesDevelopment}
          </Typography>
          <Typography variant="body2" color='#fff'>
            {strings.servicesDevelopmentDescription}
          </Typography>
        </ServiceBox>
      </StyledLink>

      <StyledLink href="/services/marketing">
        <ServiceBox>
          <ServiceIcon src={markIcon.src} alt="Marketing Icon" />
          <Typography variant="h6" fontWeight="bold" color='#fff'>
            {strings.servicesMarketing}
          </Typography>
          <Typography variant="body2" color='#fff'>
            {strings.servicesMarketingDescription}
          </Typography>
        </ServiceBox>
      </StyledLink>

      <StyledLink href="/services/ui-ux">
        <ServiceBox>
          <ServiceIcon src={uxuiIcon.src} alt="UI/UX Icon" />
          <Typography variant="h6" fontWeight="bold" color='#fff'>
            {strings.servicesUIUX}
          </Typography>
          <Typography variant="body2" color='#fff'>
            {strings.servicesUIUXDescription}
          </Typography>
        </ServiceBox>
      </StyledLink>

      <StyledLink href="/services/seo">
        <ServiceBox>
          <ServiceIcon src={seoIcon.src} alt="SEO Icon" />
          <Typography variant="h6" fontWeight="bold" color='#fff'>
            {strings.servicesSEO}
          </Typography>
          <Typography variant="body2" color='#fff'>
            {strings.servicesSEODescription}
          </Typography>
        </ServiceBox>
      </StyledLink>
    </Box>
  );
};

export default ServicesBanner;
