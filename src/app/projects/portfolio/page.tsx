// src/app/projects/porfolio/page.tsx

"use client";

import React from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DarkPic from '@/assets/images/Logo_Yellow.png'
import LightPic from '@/assets/images/Logo_Blue.png'
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
                Porfolio Website
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
                After graduating from Eastern Florida State College I felt the
                need to create a portfolio website to help show recruiters and
                employers my skills and talents in a more expanded way than what
                my resume can provide. Over the course of a few weeks I took
                time to learn and create a website. Creating this website has
                been an incredibly rewarding journey that allowed me to expand
                my skill set while showcasing the projects I’m passionate about.
                <br />
                <br />A huge part of the creation of this website is the ability
                to integrate and work with multiple APIs. Using Next.js and
                React, I focused on developing a fast and responsive platform
                that offers a seamless user experience. Incorporating TypeScript
                enhanced the reliability and maintainability of my code, while
                using Material-UI (MUI) and tailwindcss to achieve a modern and
                cohesive design. A key feature I’m proud of is the background
                animation that you have seen on all the pages thus far. It uses
                a mixture of Framer Motion, popmotion, and React Three Fiber to
                display an icosahedron (20-sided object) that spins and grows as
                you scroll through the webpage. Throughout the development
                process, I leveraged various APIs to add interactive elements
                and dynamic content, which not only improved the functionality
                of the site but also deepened my understanding of API
                integrations. This portfolio serves as a testament to my
                dedication to learning and applying new technologies, while also
                providing a platform to present the meaningful projects I’ve
                worked on.
              </Typography>
            </Grid>
            <Grid size={6} xs={12} md={6}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a target="_blank" href="/" rel="noopener noreferrer">
                  {
                    <Image
                      className="block dark:hidden"
                      src={LightPic}
                      alt="Porfolio Website Logo"
                      width={500}
                      height={500}
                    />
                  }
                  {
                    <Image
                      className="hidden dark:block"
                      src={DarkPic}
                      alt="Porfolio Website Logo"
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
