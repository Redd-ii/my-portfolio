// src/app/components/SkillCard.tsx

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between', 
          padding: 2,
          height: '100%',
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          cursor: 'default',
        }}
        role="button"
        tabIndex={0}
        aria-label={name}
      >
        <Box
          sx={{
            width: '100%',
            height: '64px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Image
            src={image}
            alt={`${name} icon`}
            width={64}
            height={64}
            style={{
              maxWidth: '64px',
              maxHeight: '64px',
              objectFit: 'contain',
            }}
          />
        </Box>
        <CardContent sx={{ padding: 0 }}>
          <Typography variant="h6" align="center" >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
