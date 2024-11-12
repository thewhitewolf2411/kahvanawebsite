// ContactForm.js
'use client';
import React from 'react';
import { Box, TextField, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import aboutBg from '../../../app/_static/contactImage.jpg';
import GetInTouchButton from '../button';

const ContactForm = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5', px: 6 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
      >
        {/* Image Section - Left Side */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '50%' },
            height: 400,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Image
            src={aboutBg}
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>

        {/* Form Section - Right Side */}
        <Box
          component="form"
          sx={{ flexGrow: 1, maxWidth: 600, mx: 'auto', width: '100%' }}
        >
          {/* Two-column layout */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {/* First Name */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                First Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your first name"
                sx={{ height: '48px' }}
              />
            </Box>

            {/* Last Name */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Last Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your last name"
                sx={{ height: '48px' }}
              />
            </Box>

            {/* Email */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Email
              </Typography>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                sx={{ height: '48px' }}
              />
            </Box>

            {/* Phone */}
            <Box sx={{ flex: '1 1 48%' }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Phone
              </Typography>
              <TextField
                fullWidth
                type="tel"
                placeholder="Enter your phone number"
                sx={{ height: '48px' }}
              />
            </Box>

            {/* Message */}
            <Box sx={{ flex: '1 1 100%' }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Enter your message"
              />
            </Box>
          </Box>

          {/* Get In Touch Button */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <GetInTouchButton />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactForm;
