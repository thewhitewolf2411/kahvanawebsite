import React, { useState } from 'react';
import { Box, Button, Typography, Avatar, Paper } from '@mui/material';
import portfolioCardBg from "../../_static/portfolio/portfolioCardBg.jpg";
import reviewsImg from "../../_static/reviewsImg.jpg";
import mobileDev from "../../_static/reviewSvg/mobileDev.png";
import webDev from "../../_static/reviewSvg/webDev.png";
import iot from "../../_static/reviewSvg/iot.png";
import marketing from "../../_static/reviewSvg/marketing.png";
import seo from "../../_static/reviewSvg/seo.png";
import hr from "../../_static/reviewSvg/hr.png";
import Image from 'next/image';
import boxesImg from "../../_static/bi_boxes.png";
import peopleImg from "../../_static/formkit_people.png";
import avatar1 from "../../_static/reviewSvg/reviewT1.jpg";
import avatar2 from "../../_static/reviewSvg/reviewT2.jpg";
import avatar3 from "../../_static/reviewSvg/reviewT3.jpg";
import { SidebarContext } from '../../context/languageContext';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { language } = React.useContext(SidebarContext) // This will control the language (can be 'bh' or 'en')

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const tabs = [
    { label: language === 'bh' ? 'Recenzija' : 'Review', img: peopleImg, index: 0 },
    { label: language === 'bh' ? 'Oblasti rada' : 'Areas of our work', img: boxesImg, index: 1 },
  ];

  const reviewers = [
    {
      name: "Darko Ivanović",
      title: language === 'bh' ? "Direktor @ Digital Den Hub" : "CEO @ Digital Den Hub",
      linkedin: "https://www.linkedin.com/in/darko-ivanovic-mne/",
      avatar: avatar1.src,
      review: language === 'bh'
        ? "Ozbiljan rad mladih pojedinaca, naoružan dubokim znanjem u tehnologiji i poslovanju, je inspirativan. Njihova posvećenost i nezasitna žeđ za inovacijama stvaraju talas transformativnih ideja koje preoblikuju industrije i pomeraju granice. Nazivam ih Avengerima za vaše poslovanje - dolaze i spašavaju dan."
        : "The serious work of young individuals, armed with deep knowledge in both technology and business, is nothing short of inspiring. Their dedication and insatiable thirst for innovation fuel a new wave of transformative ideas, reshaping industries and pushing boundaries. I like to call them Avengers for your business - coming out and saving the day.",
    },
    {
      name: "Asim Avdagić",
      title: language === 'bh' ? "Direktor @ BamCard BiH i investitor" : "CEO @ BamCard BiH and Investor",
      linkedin: "https://www.linkedin.com/in/asim-avdagic-249a4b46/",
      avatar: avatar2.src,
      review: language === 'bh'
        ? "Od skromnih početaka, pokretani nepokolebljivom posvećenošću i nepopustljivom verom, Kahvana pretvara snove u stvarnost i dokazuje da početak od nule predstavlja priliku da se vinete do beskonačnih visina."
        : "From humble beginnings, fueled by unwavering dedication and an unshakable faith, Kahvana is transforming dreams into reality and proving that starting from zero is merely an opportunity to soar to limitless heights.",
    },
    {
      name: "Muamer Aleta",
      title: language === 'bh' ? "Direktor @ Amko Komerc" : "CEO @ Amko Komerc",
      linkedin: "#",
      avatar: avatar3.src,
      review: language === 'bh'
        ? "Suradnja s ovom kompanijom bila je izuzetno pozitivno iskustvo. Njihov kreativni pristup i profesionalizam u organizaciji događaja pomogli su nam ostvariti visokokvalitetnu promociju i osigurali nezaboravno iskustvo za naše klijente. S njima je uvijek lako raditi jer razumiju naše potrebe i donose inovativna rješenja."
        : "Collaborating with this company has been an incredibly positive experience. Their creative approach and professionalism in organizing events helped us achieve high-quality promotion and ensured an unforgettable experience for our clients. It's always easy to work with them because they understand our needs and bring innovative solutions.",
    },
  ];

  const workAreas = [
    { name: language === 'bh' ? 'Mobilni razvoj' : 'Mobile Development', img: mobileDev },
    { name: language === 'bh' ? 'Web razvoj' : 'Web Development', img: webDev },
    { name: language === 'bh' ? 'Internet stvari (IoT)' : 'IoT', img: iot },
    { name: language === 'bh' ? 'Marketing' : 'Marketing', img: marketing },
    { name: language === 'bh' ? 'SEO optimizacija' : 'SEO', img: seo },
    { name: language === 'bh' ? 'Ljudski resursi' : 'Human Resources', img: hr },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f6f6', px: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
      {/* Side Navigation (Tabs) */}
      <Box
        sx={{
          width: { xs: '100%', sm: '15%' },
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'column' },
          alignItems: 'center',
          py: 5,
          marginRight: 2,
          minHeight: { xs: 'auto', sm: '600px' },
          justifyContent: { xs: 'space-around', sm: 'flex-start' }, // Center on mobile
          marginBottom: { xs: 2, sm: 0 }, // Add margin-bottom for mobile view
        }}
      >
        {tabs.map((tab, index) => (
          <Button
            key={tab.index}
            onClick={() => handleTabChange(index)}
            sx={{
              position: 'relative',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80px',
              marginBottom: '40px',
              color: selectedTab === tab.index ? '#000' : '#999',
              width: '140px',
              height: '100px',
              whiteSpace: 'nowrap',
              '&:hover': { backgroundColor: '#f0f0f0' },
              backgroundColor: selectedTab === tab.index ? '#e0e0e0' : 'transparent',
              borderRadius: 2,
              textTransform: 'none',
              padding: 0,
              '&:hover::after': {
                content: '""',
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                border: '10px solid transparent',
                borderLeftColor: { sm: '#f0f0f0', xs: 'transparent' },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                border: '10px solid transparent',
                borderLeftColor: selectedTab === tab.index ? { sm: '#f0f0f0', xs: 'transparent' } : 'transparent',
              },
            }}
          >
            <img src={tab.img.src} alt={tab.label} style={{ width: '40px', height: '40px', marginBottom: '8px' }} />
            {tab.label}
          </Button>
        ))}
      </Box>
    
      {/* Content Area */}
      <Box sx={{ flex: 1, p: 0 }}>
        {/* Tab Content */}
        <Box sx={{ xs: 12, md: 8, px: 4 }}>
          <Typography variant="h4" sx={{ my: 6, textAlign: 'center', fontWeight: 600 }}>
            {selectedTab === 1 && (language === 'bh' ? 'Područija rada' : 'Areas of work')}
          </Typography>
    
          {selectedTab === 0 && (
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '400px',
                  height: '600px',
                  marginRight: '20px',
                  display: { xs: 'none', sm: 'flex' }, // Hide on mobile
                }}
              >
                <Box
                  component="img"
                  src={reviewsImg.src} // Replace with actual image link
                  alt="Centered Image"
                  sx={{ borderRadius: '8px', width: '100%', maxWidth: '300px', height: '100%' }}
                />
              </Box>
    
              <Box sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
                  {language === 'bh' ? 'Povjerenje mnogih' : 'Trusted by many'}
                </Typography>
                {reviewers.map((reviewer, index) => (
                  <Box
                    key={index}
                    onClick={() => window.open(reviewer.linkedin, '_blank')}
                    sx={{ cursor: 'pointer', width: '100%', borderRadius: 2 }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        mb: 2,
                        borderRadius: 2,
                      }}
                    >
                      <Avatar src={reviewer.avatar} sx={{ height: '150px', width: '150px' }} />
                      <Box>
                        <Typography variant="h6">{reviewer.name}</Typography>
                        <Typography variant="body2">{reviewer.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`"${reviewer.review}"`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
    
          {selectedTab === 1 && (
            <Box>
              <Typography variant="body1">
                {language === 'bh'
                  ? 'Naša IT kompanija specijalizovana je za pružanje najsvježijih softverskih rješenja prilagođenih potrebama naših klijenata. Pružamo širok spektar usluga, uključujući razvoj aplikacija, web dizajn i razvoj, kao i implementaciju složenih IT infrastrukturnih rješenja.'
                  : 'Our IT company specializes in delivering cutting-edge software solutions tailored to meet the specific needs of our clients. We provide a wide range of services, including custom application development, web design and development, as well as the implementation of complex IT infrastructure solutions.'}
              </Typography>
    
              <Box py={4} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
                {workAreas.map((work, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        height: '200px',
                        backgroundImage: `url(${portfolioCardBg.src})`,
                        borderRadius: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image src={work.img.src} alt={work.name} objectFit="contain" width={100} height={100} />
                    </Box>
                    <Box elevation={0} sx={{ p: 2, textAlign: 'center' }}>
                      <Typography>{work.name}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
    
  );
}

export default App;
