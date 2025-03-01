"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Beranda", href: "#hero" },
    { text: "About", href: "#about" },
    { text: "Product", href: "#products" },
    { text: "Testimoni", href: "#testimoni" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar Tetap di Atas */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(to top,  #172B58, #3058A6)", // Sesuai dengan footer
          borderBottom: "4px solid #D61F26", // Garis bawah agar tampak modern
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <Image
              src="/images/Logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              style={{ marginRight: "8px" }}
            />
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Sri Bumi Sekar
            </Link>
          </Typography>
          {/* Menu untuk Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component="a"
                href={item.href}
                sx={{
                  mx: 1,
                  transition: "color 0.3s",
                  "&:hover": { color: "#ff9800" }, // Hover efek warna oranye
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          {/* Icon Menu untuk Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Menu untuk Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            background: "#333",
            color: "white",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={handleDrawerToggle}
              disablePadding
            >
              <ListItemText>
                <Typography
                  variant="body1"
                  sx={{
                    px: 2,
                    py: 1,
                    display: "block",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    "&:hover": { color: "#ff9800" }, // Efek hover yang sama dengan navbar desktop
                  }}
                  component="a"
                  href={item.href}
                >
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
