import React, { useState } from 'react';
import { Box, Button, Typography, Avatar, Paper } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import portfolioCardBg from "../../_static/portfolio/portfolioCardBg.jpg";
import reviewsImg from "../../_static/reviewsImg.jpg";
import mobileDev from "../../_static/reviewSvg/mobileDev.png"
import webDev from "../../_static/reviewSvg/webDev.png"
import iot from "../../_static/reviewSvg/iot.png"
import marketing from "../../_static/reviewSvg/marketing.png"
import seo from "../../_static/reviewSvg/seo.png"
import hr from "../../_static/reviewSvg/hr.png"
import Image from 'next/image';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const reviewers = [
    {
      name: "Darko Ivanović",
      title: "CEO @ Digital Den Hub",
      linkedin: "https://www.linkedin.com/in/darko-ivanovic-mne/",
      avatar: "https://i.pravatar.cc/150?img=1",
      review: "The serious work of young individuals, armed with deep knowledge in both technology and business, is nothing short of inspiring. Their dedication and insatiable thirst for innovation fuel a new wave of transformative ideas, reshaping industries and pushing boundaries. I like to call them Avengers for your business - coming out and saving the day.",
    },
    {
      name: "Asim Avdagić",
      title: "CEO @ BamCard BiH and Investor",
      linkedin: "https://www.linkedin.com/in/asim-avdagic-249a4b46/",
      avatar: "https://i.pravatar.cc/150?img=2",
      review: "From humble beginnings, fueled by unwavering dedication and an unshakable faith, Kahvana transforming dreams into reality and proving that starting from zero is merely an opportunity to soar to limitless heights.",
    },
    {
      name: "Muamer Aleta",
      title: "CEO @ Amko Komerc",
      linkedin: "#",
      avatar: "https://i.pravatar.cc/150?img=3",
      review: "Suradnja s ovom kompanijom bila je izuzetno pozitivno iskustvo. Njihov kreativni pristup i profesionalizam u organizaciji događaja pomogli su nam ostvariti visokokvalitetnu promociju i osigurali nezaboravno iskustvo za naše klijente. S njima je uvijek lako raditi jer razumiju naše potrebe i donose inovativna rješenja.",
    },
  ];

  const workAreas = [
    { name: 'Mobile Development', img: mobileDev },
    { name: 'Web Development', img: webDev },
    { name: 'IoT', img: iot },
    { name: 'Marketing', img: marketing },
    { name: 'SEO', img: seo },
    { name: 'Human Resources', img: hr },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f6f6', px: 4 }}>
      {/* Side Navigation */}
      <Box sx={{ width: '15%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5, minHeight: "600px" }}>
        {[
          { label: 'Review', icon: <PeopleIcon />, index: 0 },
          { label: 'Areas of our work', icon: <WorkspacesIcon />, index: 1 },
        ].map((tab) => (
          <Button
            key={tab.index}
            onClick={() => handleTabChange(tab.index)}
            startIcon={tab.icon}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80px',
              marginBottom: '40px',
              color: selectedTab === tab.index ? '#000' : '#999',
              width: '100%',
              '&:hover': { backgroundColor: '#f0f0f0' },
              backgroundColor: selectedTab === tab.index ? '#e0e0e0' : 'transparent',
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* Content Area */}
      <Box container sx={{ flex: 1, p: 5 }}>
        {/* Tab Content */}
        <Box xs={12} md={8} px={4}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
            {selectedTab === 1 && "We are proficient at"}
          </Typography>
          
          {selectedTab === 0 && (
            <Box container spacing={2} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', height: '600px', marginRight: '20px' }}>
                <Box
                  component="img"
                  src={reviewsImg.src} // Replace with actual image link
                  alt="Centered Image"
                  sx={{ borderRadius: '8px', width: '100%', maxWidth: '300px', height: '100%' }}
                />
              </Box>
              <Box sx={{width: "100%"}}>
              <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
                {selectedTab === 0 && "Trusted by many"}
              </Typography>
              {reviewers.map((reviewer, index) => (
                <Box
                  key={index}
                  onClick={() => window.open(reviewer.linkedin, "_blank")}
                  sx={{
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  <Box sx={{ p: 1, display: 'flex', gap: 2, alignItems: 'center', backgroundColor: "#fff", mb: 2, width: "100%" }}>
                    <Avatar src={reviewer.avatar} sx={{height: "100%", width: "150px"}}/>
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
            <Box container spacing={2}>
              <Box>
                <Typography>
                  "Our IT company specializes in delivering cutting-edge software solutions tailored to meet the specific needs of our clients. We provide a wide range of services, including custom application development, web design and development, as well as the implementation of complex IT infrastructure solutions. Our expertise spans across various sectors, from healthcare to finance, allowing us to offer personalized IT services that cater to each client's unique requirements. We keep a close eye on the latest IT trends, ensuring our clients stay ahead in the rapidly evolving industry. Through careful analysis of business processes and technological needs, we work to optimize efficiency and reduce costs for our clients. "
                </Typography>
              </Box>
              <Box py={4} sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
              {workAreas.map((work, i) => (
                <Box xs={6} md={4} key={i} >
                  <Box sx={{height: "200px", backgroundImage: `url(${portfolioCardBg.src})`, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Image src={work.img.src} alt={work.name} objectFit="contain" width={100} height={100} />
                  </Box>
                  <Paper elevation={0} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography >{work.name}</Typography>
                  </Paper>
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
