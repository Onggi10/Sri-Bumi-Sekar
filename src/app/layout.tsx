"use client";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/theme";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <div className="main-container">
            <Navbar />
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
