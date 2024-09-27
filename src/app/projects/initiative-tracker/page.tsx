// src/app/projects/initiative-tracker/page.tsx

"use client";

import React from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DND from '@/assets/images/ini.png'

export default function ProjectOnePage() {
  const theme = useTheme();


  return (
    <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="lg" sx={{ pt: 12 }}>
          <Grid container spacing={0}>
            <Grid size={8}>
              <Typography variant="h2" component="h1" gutterBottom>
                DND Inititative Tracker
              </Typography>
            </Grid>
            <Grid
              item
              size={4}
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
          <Grid container spacing={6} alignItems="center" sx={{ py: 17}}>
            <Grid size={6} xs={12} md={6}>
              <Typography variant="body1" paragraph>
                This website is for both myself and my players when it comes to
                managing health and initiative. When changing initiative the
                cards move throughout the page and end up in order of when
                players are first to last. Then players or myself can track the
                amount of damage a npc or player takes or the amount of health a
                npc or player has gained. There is also functionality of adding
                characters, and exporting and importing json files for existing
                games. I have all the code within GitHub to be viewed.
              </Typography>
              <Grid container spacing={6}>
                <Grid size={8}>
                  <Button
                    component="a"
                    href="https://redd-ii.github.io/initiative-tracker/"
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
                    Visit The Site &rarr;
                  </Button>
                </Grid>
                <Grid size={8}>
                  <Button
                    component="a"
                    href="https://github.com/Redd-ii/"
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
                    Visit my GitHub &rarr;
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={6} xs={12} md={6}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  target="_blank"
                  href="https://redd-ii.github.io/initiative-tracker/"
                  rel="noopener noreferrer"
                >
                  {
                    <Image
                      src={DND}
                      alt="Image of Website"
                      width={500}
                      height={500}
                      quality={50}
                    />
                  }
                </a>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}
