"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

interface MaterialUIProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Ubah sesuai brand kamu
    },
    secondary: {
      main: "#dc004e",
    },
    warning: {
      main: "#ff9800",
    },
  },
});

export default function MaterialUIProvider({
  children,
}: MaterialUIProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
