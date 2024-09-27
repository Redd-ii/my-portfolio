// src/components/Footer.tsx

"use client";

import React from 'react';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';

export default function Footer() {

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';


  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'background.paper', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Ryan Vargas.
        </Typography>
        <Box sx={{ mt: 1, textAlign: 'center' }}>
        <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Redd-ii"
              color="inherit"
              size="large"
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ryantvargas/"
              color="inherit"
              size="large"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/6fNXZHYXfbRajdO0aCrhKm?si=xqj-Xf4vQhWiVznoXr0DQg"
              color="inherit"
              size="large"
            >
              <SpotifyIcon
                sx={{
                  fontSize: 32,
                  color: isDarkMode ? "#FFFFFF" : "#00000",
                }}
              />
            </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
