// src/components/AssurancesSection.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'; 
import { motion } from 'framer-motion';
import AssuranceCard from './AssuranceCard';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const assurances = [
  {
    title: 'Ongoing Maintenance',
    description:
      'I ensure your web applications run smoothly and stay competitive by continuously enhancing your software. Utilizing DevOps methodologies.',
  },
  {
    title: 'Robust Back-End Solutions',
    description:
      "My expertise in building structured APIs ensures seamless integration with internal and external systems, enhancing your application's functionality",
  },
  {
    title: 'Dynamic Frontend Development',
    description:
      'Understanding your users is essential for effective web interfaces. I analyze your audience to create tailored UI designs that meet their needs.',
  },
];

const AssurancesSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          h: 'full',
          w: 'full',
          backgroundColor: 'gray.100',
          borderRadius: 'md',
          backdropFilter: 'blur(10px)',
          p: 4,
        }}
      >
        <Box sx={{ textAlign: 'center', py: 8, mb: 20 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            My Promise to You
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
            Your satisfaction is my mission. I've cultivated a diverse set of skills and upheld steadfast principles to ensure every project meets and exceeds your expectations.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {assurances.map((assurance, index) => (
              <Grid item size={4} key={index}>
                <AssuranceCard
                  title={assurance.title}
                  description={assurance.description}
                  icon={
                    index === 0 ? (
                      <BuildIcon />
                    ) : index === 1 ? (
                      <StorageIcon />
                    ) : (
                      <BrushIcon />
                    )
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AssurancesSection;
