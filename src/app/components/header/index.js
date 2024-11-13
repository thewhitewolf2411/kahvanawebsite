import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/styles';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import logo from '../../_static/logo.png';
import bhLogo from '../../_static/icon_BH.png';
import ukLogo from '../../_static/icon_UK.png';
import { SidebarContext } from '../../context/languageContext';
import { bhStrings } from '../../_languages/bh';
import { enStrings } from '../../_languages/en';

const PREFIX = 'header';

const classes = {
  root: `${PREFIX}-root`,
};

const Header = styled('div')(({ theme, scrolled }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: "#fff",
    width: "90% !important",
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.shape.borderRadius * 2,
    height: theme.spacing(10),
    padding: theme.spacing(0, 3),
    display: "flex",
    alignItems: "center",
    transition: 'top 0.3s ease',  // Smooth transition when sticking
    [theme.breakpoints.down('sm')]: {
      marginTop: scrolled ? theme.spacing(0) : theme.spacing(10),
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const { language, setLanguage } = useContext(SidebarContext);

  const pages = [
    { name: language === "bh" ? bhStrings.home : enStrings.home, path: "/" },
    { name: language === "bh" ? bhStrings.about : enStrings.about, path: "/about" },
    { name: language === "bh" ? bhStrings.careers : enStrings.careers, path: "/careers" },
    { name: language === "bh" ? bhStrings.contact : enStrings.contact, path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150); // Toggle sticky after 50px of scroll
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHeaderOptionClick = (pathname) => {
    router.push(pathname);
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: isSticky ? "#fff" : "transparent", 
        zIndex: 20, 
        boxShadow: isSticky ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none", 
        top: isSticky ? 0 : undefined 
      }}
    >
      <Header maxWidth="xl" className={classes.root} scrolled={isSticky}>
        <Toolbar disableGutters sx={{ width: "100%", justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={theme?.palette?.primary?.main}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, "& ul": { backgroundColor: "#F9F8FED9" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleHeaderOptionClick(page.path)} sx={{ color: theme?.palette?.primary?.main }}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={logo} alt="Logo" width={122} height={38} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleHeaderOptionClick(page.path)}
                sx={{ my: 2, color: theme?.palette?.primary?.main, display: 'block' }}
                className={classes.button}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Image
              src={bhLogo}
              alt="BH Language"
              width={19}
              height={13}
              style={{ cursor: "pointer" }}
              onClick={() => setLanguage("bh")}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Image
              src={ukLogo}
              alt="EN Language"
              width={18}
              height={13}
              style={{ cursor: "pointer" }}
              onClick={() => setLanguage("en")}
            />
          </Box>
        </Toolbar>
      </Header>
    </AppBar>
  );
}

export default ResponsiveAppBar;
