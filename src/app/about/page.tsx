// src/app/about/page.tsx

"use client";

import React from 'react';
import { Container, Typography, Card, useTheme, Button } from '@mui/material';
import Grid from '@mui/material/Grid2'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/assets/images/portrait1.jpg';

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 12 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
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
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",

            padding: 2,
            height: "100%",
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "background.paper",
            cursor: "default",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Image Section */}
            <Grid item size={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 13,
                  stiffness: 100,
                  restDelta: 0.001,
                  duration: 2,
                  delay: 1,
                  ease: "linear",
                }}
              >
                <Image
                  src={profilePic}
                  alt="Ryan Vargas Portrait"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: theme.shadows[5],
                  }}
                />
              </motion.div>
            </Grid>

            {/* Text Section */}
            <Grid item size={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 13,
                  stiffness: 100,
                  restDelta: 0.001,
                  duration: 2,
                  delay: 1,
                  ease: "linear",
                }}
              >
                <Typography variant="h4" component="h1" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  Hello! I'm Ryan Vargas, a Christ follower and dedicated tech
                  enthusiast who thrives on diving into code and creating innovative projects. My faith is at the center of my life; "Trust in the Lord with all your heart, ...and He will make your paths straight" (Proverbs 3:5-6). Through this, I am guided in my decisions and inspired to pursue excellence in
                  my endevors. I found my 'calling' in Computer Science, earning a
                  degree in Computer Information Systems Technology,
                  specializing in programming and software development. I've
                  honed my skills in creating efficient, scalable, and
                  innovative solutions that address real-world challenges. My
                  academic journey has equipped me with a solid foundation in
                  various programming languages and software engineering
                  principles. This fuels my eagerness to continue to learn and
                  grow in this ever-evolving field. I'm proud of my most recent project, working with Grace Life Church, in which I used my skills to develop and now manage their website.
                </Typography>
              </motion.div>
            </Grid>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 13,
                stiffness: 100,
                restDelta: 0.001,
                duration: 2,
                delay: 1,
                ease: "linear",
              }}
            >
              <Typography variant="body1" paragraph>
              Beyond technology, I find expressing my creativity through music production incredibly fulfilling. At a young age I played various instruments like piano, drums, and viola, which has equipped me with tools to use for production. Recently I released my debut self-titled album, REDII (Pronounced 'reh-dee'), where I explored various electronic music genres and experimented with various samples and synths. This creative outlet compliments my technical pursuits and enhances my problem solving abilities, creating intriguing music.
              </Typography>
              <Typography variant="body1" paragraph>
                When not immersed in coding or music production, I often find
                myself constructing intricate worlds and compelling stories for
                Dungeons and Dragons (D&D). This hobby not only sparks my
                imagination and storytelling skills, but also sharpens my
                leadership and collaborative skills. I enjoy leading my friends
                through various encounters and wild adventures, bringing stories to
                life. D&D has provided a perfect balance of both professional and
                creative attributes to my life.
              </Typography>
              <Typography variant="body1" paragraph>
              As I continue to navigate through my professional endeavors within the tech field, I remain steadfast in my commitment to personal and professional growth. I'm always on the lookout for new challenges, opportunities to collaborate, and ways to give back to the community that has supported me along the way. Whether you're interested in discussing the latest tech trends, collaborating on projects, or sharing stories from the world of D&D, I'd love to connect!
              </Typography>
              <Typography variant="body1" paragraph>
                Thank you for taking the time to get to know me. Let's create
                something amazing together. God bless! 
              </Typography>
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                View Projects
              </Button>
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                sx={{ textTransform: "none", ml: 2, }}
              >
                Contact Me
              </Button>
            </motion.div>
          </Grid>
        </Card>
      </motion.div>
    </Container>
  );
}
