import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { SidebarContext } from '../../context/languageContext';
import partyPooper from "../../_static/party_pooper.png";

export default function Banner() {
  const { language } = React.useContext(SidebarContext)
  return (
    <Box sx={{ background: "#FF3179", padding: "4px", display: "flex", justifyContent: "center", textAlign: "center" }}>
      <Image
        src={partyPooper}
        alt="Logo"
        width={21} // Set the desired width
        height={25} // Set the desired height
      />
      <Typography sx={{ color: "#fff" }}>{language === "en" ? "Celebrating our new offices in the USA! Celebrate with us." : "Slavimo naše nove urede u SAD-u! Proslavite s nama."}</Typography>
    </Box>
  )
}