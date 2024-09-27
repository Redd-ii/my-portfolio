import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import { useTheme, darken } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactBar() {
  const theme = useTheme();


  const isDarkMode = theme.palette.mode === 'dark';


  const backgroundColor = isDarkMode ? theme.palette.primary.main : theme.palette.primary.main; 
  const textColor = theme.palette.primary.contrastText;


  const buttonBackgroundColor = textColor; 
  const buttonTextColor = backgroundColor; 

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: backgroundColor,
          color: textColor,
          cursor: "pointer",
          width: "100%",
        }}
        role="button"
        tabIndex={0}
        aria-label="Contact"
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Let's Work Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </Typography>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
            "&:hover": {
              backgroundColor: darken(buttonBackgroundColor, 0.2),
            },
          }}
        >
          Contact Me
        </Button>
      </Card>
    </motion.div>
  );
}
