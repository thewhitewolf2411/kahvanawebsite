import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function DividerText({ children, showArrow = false, onArrowClick, color }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {/* Left Divider */}
      <Box sx={{ borderBottom: `1px solid ${color ? color : "#fff"}`, flexGrow: 1 }} />

      {/* Optional Arrow */}
      {showArrow && onArrowClick && (
        <Box onClick={onArrowClick} sx={{ display: 'flex', alignItems: 'center', pl: 1, pr: 1, cursor: "pointer" }}>
          <ArrowBackIosNewIcon sx={{ color: color ? color : '#fff' }} />
        </Box>
      )}

      {/* Center Text */}
      <Typography
        variant="h4"
        sx={{
          padding: '0 10px',
          color: color ? color : '#fff',
          minWidth: '240px',
          maxWidth: '360px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {children}
      </Typography>

      {/* Right Divider */}
      <Box sx={{ borderBottom: `1px solid ${color ? color : "#fff"}`, flexGrow: 1 }} />
    </Box>
  );
}
