// src/app/contact/Page.tsx

"use client";

import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, IconButton } from '@mui/material';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';
import { useTheme } from '@mui/material/styles';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_j8j147b",
        "template_sor4lut",
        formData,
        "IPvbaBZA4rbNFB58R"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("Message sent!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("There was an error sending the email:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ py: 16, maxWidth: 600, mx: "auto", mt: 4, textAlign: "center" }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <TextField
            label="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, textTransform: "none" }}
            disabled={status === "Sending..."}
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </Button>
          {status && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              {status}
            </Typography>
          )}
          <Box sx={{ textAlign: "center", pt: 4 }}>
            <Typography variant="h6">Links to my socials:</Typography>
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
        </Box>
        <Container maxWidth="lg"></Container>
      </motion.div>
    </div>
  );
}
