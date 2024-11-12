import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DividerText({ children }) {
  return (
    <Box sx={{display: "flex", alignItems: "center", width: "100%" }}>
      <Box sx={{borderBottom: "1px solid #fff", width: "100%"}} />
      <Typography sx={{padding: "0 10px 0 10px", color: "#fff", width: "240px", minWidth: "360px", textAlign: "center"}} variant="h4">
        {children}
      </Typography>
      <Box sx={{borderBottom: "1px solid #fff", width: "100%"}} />
    </Box>
  );
};