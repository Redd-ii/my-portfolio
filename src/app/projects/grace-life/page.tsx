// src/app/projects/grace-life/page.tsx

"use client";

import React from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DarkPic from '@/assets/images/GLCWhite.png'
import LightPic from '@/assets/images/GLCDark.png'
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
            <Grid size={6} xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Grace Life Church
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
          <Grid container spacing={6} alignItems="center" sx={{ pt: 2 }}>
            <Grid size={6} xs={12} md={6}>
              <Typography variant="body" paragraph>
                Grace Life Church's Pastor, Josh Smith, employed me to help him
                completely redesign and develop a new website. The church is
                using Ministry Brands Amplified (MBA) as the churches content
                management, with WordPress integrated into MBA. so, using
                WordPress I helped develop the website and got the new website
                up in less than a week! Now the work I conduct for them includes
                taking employee pictures and editing them, and continued admin
                work within their page
              </Typography>
              <Button
                component="a"
                href="https://gracebrevard.org/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  color: theme.palette.mode === "dark" ? "#000000" : undefined,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    color:
                      theme.palette.mode === "dark" ? "#000000" : undefined,
                  },
                }}
              >
                Visit Their Site &rarr;
              </Button>
            </Grid>
            <Grid size={6} xs={12} md={6}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  target="_blank"
                  href="https://gracebrevard.org/"
                  rel="noopener noreferrer"
                >
                  {
                    <Image
                      className="block dark:hidden"
                      src={LightPic}
                      alt="Grace Life Church Logo"
                      width={500}
                      height={500}
                    />
                  }
                  {
                    <Image
                      className="hidden dark:block"
                      src={DarkPic}
                      alt="Grace Life Church Logo"
                      width={500}
                      height={500}
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
