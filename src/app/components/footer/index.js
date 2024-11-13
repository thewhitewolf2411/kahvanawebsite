import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';
import mapBg from "../../_static/map.png";
import logo from '../../_static/logoSmall.png';
import Image from 'next/image';

const Footer = () => {
  const { language } = React.useContext(SidebarContext);

  const pages = [
    { name: language === "bh" ? "Affiliate" : "Affiliate", path: "/" },
    { name: language === "bh" ? bhStrings.home : enStrings.home, path: "/" },
    { name: language === "bh" ? bhStrings.portfolio : enStrings.portfolio, path: "/portfolio" },
    { name: language === "bh" ? bhStrings.about : enStrings.about, path: "/about" },
    { name: language === "bh" ? bhStrings.careers : enStrings.careers, path: "/careers" },
    { name: language === "bh" ? bhStrings.blog : enStrings.blog, path: "/blog" },
    { name: language === "bh" ? bhStrings.contact : enStrings.contact, path: "/#contact" }
  ];

  return (
    <>
    <Box sx={{display: "flex", justifyContent: "space-between", background: "#000", px: 8, py: 4, borderBottom: "1px solid rgba(255, 49, 121, 1)"}}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600, mr: 1 }}>Contact</Typography>
        <Typography variant="h4" sx={{ color: "rgba(255, 49, 121, 1)", fontWeight: 600 }}>Info</Typography>
      </Box>
      <Box>
        <Image
          src={logo}
          alt="Logo"
          width={140} // Set the desired width
        />
      </Box>
    </Box>
    <Box
      sx={{
        backgroundImage: `url(${mapBg.src})`,
        backgroundSize: { xs: 'cover', md: '100% 100%' },
        backgroundPosition: 'center',
        color: '#fff',
        py: 4,
        px: 6,
        position: 'relative',
      }}
    >
      {/* Black Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* First address section */}
        <Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: 8, 
    flexDirection: { xs: 'column', md: 'row' },  // Stack vertically on mobile
    alignItems: { xs: 'center', md: 'flex-start' } // Center-align on mobile for a balanced look
  }}
>
  <Box sx={{ mb: { xs: 4, md: 0 } }}> {/* Bottom margin only on mobile */}
    <Typography variant="h6" sx={{ mb: 2 }}>Head Office</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaMapMarkerAlt size={20} style={{ marginRight: 8 }} />
      <Typography>USA</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaPhone size={20} style={{ marginRight: 8 }} />
      <Typography>+387 62678989</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaEnvelope size={20} style={{ marginRight: 8 }} />
      <Typography>info@kahvana.com</Typography>
    </Box>
    <Typography sx={{ mb: 2 }}>651 N Broad St, Suite 201</Typography>
    <Typography>Middletown, DE 19709 USA</Typography>
  </Box>

  {/* Divider */}
  <Divider 
    orientation="vertical" 
    sx={{ 
      borderColor: '#FF3179', 
      borderRight: "1px solid #ff3179", 
      height: 180, 
      display: { xs: 'none', md: 'block' }  // Hide divider on mobile
    }} 
  />

  {/* Second address section */}
  <Box sx={{ mt: { xs: 4, md: 0 } }}> {/* Top margin only on mobile */}
    <Typography variant="h6" sx={{ mb: 2 }}>Admin Office</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaMapMarkerAlt size={20} style={{ marginRight: 8 }} />
      <Typography>Bosnia and Herzegovina</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaPhone size={20} style={{ marginRight: 8 }} />
      <Typography>+387 62678989</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <FaEnvelope size={20} style={{ marginRight: 8 }} />
      <Typography>info@kahvana.com</Typography>
    </Box>
    <Typography sx={{ mb: 2 }}>Marsala Tita 54, 71000 Sarajevo</Typography>
  </Box>
</Box>

        {/* Footer Navigation Links */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {pages.map((page) => (
            <Link
              href={page.path}
              color="inherit"
              sx={{ mx: 1, textDecoration: 'none' }}
              key={page.name}
            >
              {page.name}
            </Link>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
          <IconButton component="a" href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
            <FaFacebook size={30} />
          </IconButton>
          <IconButton component="a" href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
            <FaInstagram size={30} />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com" target="_blank" sx={{ color: 'white' }}>
            <FaLinkedin size={30} />
          </IconButton>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Footer;
