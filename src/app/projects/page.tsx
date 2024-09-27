// src/app/projects/page.tsx

"use client";

import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProjectCard from '@/app/components/ProjectCard';
import { motion } from 'framer-motion';
import ContactBar from '@/app/components/ContactBar';

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

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          My Projects And Achievements
        </Typography>
      </motion.div>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {projects.map((project, idx) => (
          <Grid
            item
            size={6}
            key={idx}
            xs={12}
            sm={6}
            md={4}
            justifyContent="left"
          >
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
                damping: 13,
                stiffness: 100,
                restDelta: 0.001,
                duration: 3,
                ease: "linear",
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          delay: 1,
          duration: 0.5,
          scale: {
            delay: 1,
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <ContactBar />
      </motion.div>
    </Container>
  );
}
