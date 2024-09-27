// src/app/page.tsx

"use client";

import React, { lazy } from 'react';
import { Container, Box, Typography, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'; 
import Image from 'next/image';
import { motion } from "framer-motion";
import profilePic from '@/assets/images/portraitPic.jpg';
import ProjectCard from '@/app/components/ProjectCard';
import ContactBar from '@/app/components/ContactBar';
import AssurancesSection from '@/app/components/AssuranceSection';

const SkillsSection = lazy(() => import('@/app/components/SkillsSection'));

const projects = [
  {
    title: 'Grace Life Church',
    description: 'Help develop and maintain this church\'s website.',
    link: '/projects/grace-life',
  },
  {
    title: 'Dungeons and Dragons Initiative Tracker',
    description: 'Website creation for my gaming needs.',
    link: '/projects/initiative-tracker',
  },
  {
    title: 'This Portfolio Website',
    description: 'A bold and ambitious step in my Web Development Journey.',
    link: '/projects/portfolio',
  },
  {
    title: 'My First Album, REDII',
    description: 'A Passion Project.',
    link: '/projects/first-album',
  },
  {
    title: 'Dungeon Master for Dungeons and Dragons',
    description: 'Take a step in the creative world of Oisah.',
    link: '/projects/dungeons-and-dragons',
  },
];

export default function HomePage() {
  const theme = useTheme();


  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      {/* About Me Section */}
      <Box sx={{ textAlign: "center", py: 8, mb: 20 }} id="about">
        <Grid container spacing={20} alignItems="center">
          <Grid size={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
                duration: 3,
                delay: 0.5,
                ease: "linear",
              }}
            >
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to My Portfolio!
              </Typography>
              <Typography variant="body" paragraph align="">
                Hello! I'm Ryan Vargas, a passionate Christian and a tech
                enthusiast, who loves diving into code and creating exciting
                projects! I graduated with a degree in Computer Information
                Systems Technology, focusing on programming and software
                development, and I'm always eager to learn and grow in this
                ever-evolving field. Beyond coding, I love to express my
                creativity as a musician and producer as well as contructing
                worlds and stories for the game D&D!
              </Typography>
              <Button
                component="button"
                href="/about"
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
                Read More &rarr;
              </Button>
            </motion.div>
          </Grid>
          <Grid size={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
                duration: 3,
                delay: 0.5,
                ease: "linear",
              }}
            >
              <Image
                src={profilePic}
                alt="Ryan Vargas's Profile Picture"
                placeholder="blur"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: theme.shadows[5],
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Assurances Section */}
      <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <AssurancesSection />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <SkillsSection />
        </motion.div>
      </div>

      {/* Projects Section */}
      <Box
        sx={{
          h: 'full',
          w: 'full',
          backgroundColor: 'gray.100',
          borderRadius: 'md',
          backdropFilter: 'blur(4px)',
          p: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box sx={{flexGrow: 1, py: 8, mb: 20}} id="projects">
            <Typography variant="h2" component="h1" gutterBottom align="center">
              Projects and Achievements
            </Typography>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          </Box>
        </motion.div>
      </Box>

      {/* Contact Section */}
      <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 0.5,
            scale: {
              type: "spring",
              damping: 13,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Box sx={{flexGrow: 1, py: 8, mb: 24 }} id="projects">
          <ContactBar />
          </Box>
          
        </motion.div>
      </div>
    </Container>
  );
}
