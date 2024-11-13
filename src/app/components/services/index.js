import React, { useContext } from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import DividerText from '../dividerText';
import { SidebarContext } from '../../context/languageContext';

const services = {
  en: [
    { 
      title: 'Web Applications', 
      description: 'Solutions that enhance your business.',
      details: 'Our web app solutions are designed to improve the efficiency of your business, whether for internal tools or customer-facing apps. We create secure, fast, and tailored applications that fit your specific needs.' 
    },
    { 
      title: 'Marketing', 
      description: 'Campaigns that build long-term connections.',
      details: 'Through tailored marketing strategies, we help your brand build recognition and engagement in the market. Our goal is to create content that connects your audience to your brand on a deeper, emotional level.' 
    },
    { 
      title: 'Communications and Design', 
      description: 'Visual identity that takes your breath away.',
      details: 'We create designs that not only look great but also communicate with your customers. Our service includes everything from brand identity to digital content, ensuring recognition and a strong connection with your audience.' 
    },
  ],
  bh: [
    { 
      title: 'Web aplikacije', 
      description: 'Rješenja koja unapređuju vaše poslovanje.',
      details: 'Naša rješenja za web aplikacije osmišljena su da unaprijede efikasnost vašeg poslovanja, bilo da se radi o alatima za unutrašnju upotrebu ili aplikacijama za korisnike. Razvijamo aplikacije koje su sigurne, brze i prilagođene vašim specifičnim potrebama.' 
    },
    { 
      title: 'Marketing', 
      description: 'Kampanje koje grade dugoročne veze.',
      details: 'Kroz prilagođene marketinške strategije, pomažemo vašem brendu da izgrade prepoznatljivost i angažman na tržištu. Naš cilj je da stvorimo sadržaj koji povezuje vašu publiku s vašim brendom na dubljoj, emocionalnoj razini.' 
    },
    { 
      title: 'Komunikacije i dizajn', 
      description: 'Vizualni identitet koji oduzima dah.',
      details: 'Kreiramo dizajn koji ne samo da izgleda dobro, već i komunicira s vašim kupcima. Naša usluga uključuje dizajniranje svega, od identiteta brenda do digitalnog sadržaja, stvarajući prepoznatljivost i snažnu vezu sa vašom publikom.' 
    },
  ]
};

const Services = () => {
  const { language } = useContext(SidebarContext); // Access current language from context
  const localizedServices = services[language]; // Get services for the selected language

  return (
    <Box sx={{ py: 6, color: '#fff', textAlign: 'center', marginBottom: 8 }}>
      <Box sx={{ marginTop: 8 }} />
      <DividerText>{language === 'bh' ? 'Usluge' : 'Services'}</DividerText>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 8 }}>
        <Box sx={{ px: 8, py: 6, display: 'flex', gap: 4 }}>
          {localizedServices.map((service, index) => (
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
              <Link 
                color='#fff' 
                underline="hover" 
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {language === 'bh' ? 'Više o ovoj usluzi' : 'More about this service'} &rarr;
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
