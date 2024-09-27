// src/app/components/SkillsSection.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillCard from './SkillCard';

const skills = [
  { name: 'Adobe Products', image: '/icons/adobe.svg' },
  { name: 'C#', image: '/icons/csharp.svg' },
  { name: 'C++', image: '/icons/cplusplus.svg' },
  { name: 'Git', image: '/icons/git.svg' },
  { name: 'Fl Studio', image: '/icons/flstudio.svg' },
  { name: 'Java', image: '/icons/java.svg' },
  { name: 'JavaScript', image: '/icons/javascript.svg' },
  { name: 'Next.js', image: '/icons/nextjs.svg' },
  { name: 'Node.js', image: '/icons/nodejs.svg' },
  { name: 'React.js/native', image: '/icons/react.svg' },
  { name: 'Tailwindcss', image: '/icons/tailwindcss.svg' },
  { name: 'Typescript', image: '/icons/typescript.svg' },
  { name: 'Wordpress', image: '/icons/wordpress.svg' },
];

const SkillsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        flexGrow: 1,
      }}
      id="skills"
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ pt: 2 }}
      >
        Technologies I Use
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          mt: 3,
          mb: 20,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',   
            sm: 'repeat(3, 1fr)',   
            md: 'repeat(4, 1fr)',  
            lg: 'repeat(5, 1fr)', 
          },
        }}
      >
        {skills.map((skill, idx) => (
          <Box key={idx} sx={{ height: '100%' }}>
            <SkillCard name={skill.name} image={skill.image} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
