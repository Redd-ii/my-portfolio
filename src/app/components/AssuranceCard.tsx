// src/components/AssuranceCard.tsx

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface AssuranceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const AssuranceCard: React.FC<AssuranceCardProps> = ({ title, description, icon }) => {
  const theme = useTheme();


  const isDarkMode = theme.palette.mode === 'dark';

  // Define background colors for light and dark modes
  const backgroundColor = isDarkMode ? theme.palette.primary.main : theme.palette.primary.main; 
  const textColor = theme.palette.primary.contrastText; 


  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <CardContent
        sx={{
          boxShadow: 5,
          borderRadius: 3,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {icon && <Box sx={{ fontSize: 40 }}>{icon}</Box>}
        </Box>
        <Typography variant="h7" component="h2" gutterBottom sx={{fontWeight: 'bold'}}>
          {title}
        </Typography>
        <Typography variant="body1" color="textColor">
          {description}
        </Typography>
      </CardContent>
    </motion.div>
  );
};

export default AssuranceCard;
