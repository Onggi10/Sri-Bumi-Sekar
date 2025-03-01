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
  Divider,
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
          background: "linear-gradient(to top,  #172B58, #3058A6)", // Warna biru sesuai footer
          borderBottom: "4px solid #D61F26",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Image
              src="/images/Logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              style={{ marginRight: "8px" }}
            />
            <Typography variant="h6">
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Sri Bumi Sekar
              </Link>
            </Typography>
          </Box>

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
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  transition: "color 0.3s, background 0.3s",
                  "&:hover": {
                    color: "#D61F26",
                    background: "#F1C40F",
                    borderRadius: "4px",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Icon Menu untuk Mobile */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: "white", // 🔥 Pastikan warna ikon putih
            }}
          >
            <MenuIcon sx={{ fontSize: 30, color: "white" }} />{" "}
            {/* 🔥 Warna ikon dipaksa putih */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer agar konten tidak tertutup Navbar */}
      <Box sx={{ height: "64px" }} />

      {/* Sidebar Menu untuk Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280, // Lebar lebih besar agar lebih nyaman
            background: "#172B58", // Warna biru tua agar sesuai tema
            color: "#FFFFFF",
          },
        }}
      >
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Image
            src="/images/Logo.jpeg"
            alt="Logo"
            width={50}
            height={50}
            style={{ marginBottom: "8px" }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#FFFFFF" }}
          >
            Sri Bumi Sekar
          </Typography>
        </Box>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      px: 3,
                      py: 1.5,
                      display: "block",
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#FFFFFF", // 🔥 Warna teks putih agar jelas
                      transition: "background 0.3s, color 0.3s",
                      "&:hover": {
                        background: "#D61F26", // 🔥 Background merah saat hover
                        color: "#FFFFFF",
                        borderRadius: "4px",
                      },
                    }}
                    component="a"
                    href={item.href}
                    onClick={handleDrawerToggle}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
