// Footer.js
import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';

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
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 4, px: 6 }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* First address section */}
        <Grid item xs={12} sm={5}>
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
        </Grid>

        {/* Divider */}
        <Grid item xs={12} sm={1}>
          <Divider orientation="vertical" sx={{ borderColor: '#FF3179', height: '100%' }} />
        </Grid>

        {/* Second address section */}
        <Grid item xs={12} sm={5}>
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
        </Grid>
      </Grid>

      {/* Footer Navigation Links */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
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
  );
};

export default Footer;
