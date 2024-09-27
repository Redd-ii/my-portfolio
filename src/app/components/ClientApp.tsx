// src/components/ClientApp.tsx

"use client";

import React, { useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '@/context/ThemeContext';
import { getTheme } from '@/theme/theme';

export default function ClientApp({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const muiTheme = getTheme(theme as 'light' | 'dark');

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}
