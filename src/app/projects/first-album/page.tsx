// src/app/projects/first-album/page.tsx

"use client";

import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography, Box, Button, useTheme, Skeleton } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectOnePage() {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="lg" sx={{ pt: 12 }}>
          <Grid container spacing={0}>
            <Grid size={6} xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                First Album, REDII
              </Typography>
            </Grid>
            <Grid
              item
              size={6}
              xs={12}
              md={6}
              style={{ display: "flex" }}
              justifyContent="flex-end"
            >
              <Box sx={{ mt: 2 }}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                >
                  Back to Projects
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="center">
            <Grid size={6} xs={12} md={6}>
              <Typography variant="body1" paragraph>
                From a very young age I was always musical. For me it was one of
                many ways I could express myself creatively. My musical journey
                started in the Fifth grade where I picked up the viola (larger
                violin). For the next seven years I would play the viola,
                eventually being a part of the chamber orchestra at my
                highschool. Throughout that time I also started to learn piano
                from my Pastor Josh, who went to college for a musical degree.
                After some time, I fell out of touch with piano and viola and
                started to focus on school in 2020. My love of music never went
                away and being apart of a very logic-based degree, I yearned for
                a creative outlet.
                <br />
                <br />
                Eventually one of my friend Mishka, showed me this program
                called FL Studio, where he and his brother created their own
                music under the alias Borscht Porsche. This reignited the
                creative side in me. I bought FL Studio and started messing
                around, creating songs, synth sounds, and various beats. After
                about a year of work with countless hours into producing,
                creating, and mastering with a lot of failure inbetween it, I
                picked up the artist name REDII, eventually publishing my debut
                album, REDII, in June 2024.
                <br /> This album spans a wide variety of electronic music, from
                a gritty ambience of D I S T O P I A or drum and bass of Icarus,
                there most likely will be a song you like!
                <br />
                <br />
                Since releasing this album I have continued to make music and I
                plan on releasing some singles. There is a lot of room to grow
                when it comes to song creation and I have only scratched the
                surface of what is possible. I hope you enjoy it!
              </Typography>
              <Typography variant="h5" component="h1" gutterBottom>
                Artist Page - REDII
              </Typography>
              <Grid
                container
                spacing={7}
                style={{ display: "flex" }}
                justifyContent="flex-center"
              >
                <Grid size={2}>
                  <Button
                    component="a"
                    href="https://music.youtube.com/channel/UCrGDGmEMiMPYwAsdh_1JLfQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "none",
                      color:
                        theme.palette.mode === "dark" ? "#000000" : undefined,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        color:
                          theme.palette.mode === "dark" ? "#000000" : undefined,
                      },
                    }}
                  >
                    Visit YouTube &rarr;
                  </Button>
                </Grid>
                <Grid size={2} justifyContent="center">
                  <Button
                    component="a"
                    href="https://open.spotify.com/artist/6fNXZHYXfbRajdO0aCrhKm?si=wdEJBlAERWOS6jxwP7uhrQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "none",
                      color:
                        theme.palette.mode === "dark" ? "#000000" : undefined,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        color:
                          theme.palette.mode === "dark" ? "#000000" : undefined,
                      },
                    }}
                  >
                    Visit Spotify &rarr;
                  </Button>
                </Grid>
                <Grid size={2}>
                  <Button
                    component="a"
                    href="https://music.apple.com/us/artist/redii/1745001688"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "none",
                      color:
                        theme.palette.mode === "dark" ? "#000000" : undefined,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        color:
                          theme.palette.mode === "dark" ? "#000000" : undefined,
                      },
                    }}
                  >
                    Visit Apple Music &rarr;
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={6} xs={12} md={6}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "730px",
                  }}
                >
                  {loading && (
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "730px",
                        borderRadius: "12px",
                      }}
                    />
                  )}
                  <iframe
                    onLoad={handleLoad}
                    style={{
                      borderRadius: "12px",
                      width: "100%",
                      height: "730px",
                      opacity: loading ? 0 : 1,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                    src="https://open.spotify.com/embed/album/4S8YIiKa6dzHP8cCI2fkgm?utm_source=generator&theme=0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                    title="Spotify Embed"
                  ></iframe>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}
