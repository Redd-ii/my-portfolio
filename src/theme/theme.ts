// src/theme/theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => {
  const primaryMain = mode === 'light' ? '#2563EB' : '#FCD34D';
  const primaryContrastText = mode === 'light' ? '#FFFFFF' : '#000000';

  return {
    palette: {
      mode,
      primary: {
        main: primaryMain,
        contrastText: primaryContrastText,
      },
      secondary: {
        main: mode === 'light' ? '#FCD34D' : '#2563EB',
      },
      background: {
        default: mode === 'light' ? '#F3F4F6' : '#1E1E1E',
        paper: mode === 'light' ? '#FFFFFF' : '#121212',
      },
      text: {
        primary: mode === 'light' ? '#111827' : '#FFFFFF',
        secondary: mode === 'light' ? '#6B7280' : '#9CA3AF',
      },
    },
  };
};

export const getTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));
