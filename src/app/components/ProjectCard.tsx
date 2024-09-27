// src/components/ProjectCard.tsx

import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%', 
        transition: 'background-color 0.3s, box-shadow 0.3s',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1, 
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ color: theme.palette.text.primary, marginBottom: 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button
          component={Link}
          href={link}
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            color: theme.palette.mode === 'dark' ? '#000000' : undefined,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.mode === 'dark' ? '#000000' : undefined,
            },
          }}
        >
          Learn More &rarr;
        </Button>
      </CardActions>
    </Card>
    </motion.div>
  );
}
