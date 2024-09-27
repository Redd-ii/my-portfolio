// src/components/ClientThemeProvider.tsx

"use client";

import React, { useContext } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "@/context/ThemeContext";

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);


  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "dark" ? "#fcd34d" : "#2563EB",
          },
        },
      }),
    [theme]
  );

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}
