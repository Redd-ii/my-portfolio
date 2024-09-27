// src/components/ThemeToggle.tsx

"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { IconButton, Typography, Stack } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      <Stack direction="row" alignItems="center" spacing={0.5}>
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        <Typography variant="body2" component="span">
          Theme
        </Typography>
      </Stack>
    </IconButton>
  );
}
