"use client";
import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        backgroundImage: "url('/images/Pengiriman 9.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: 500, md: 700 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
        scrollMarginTop: "80px",
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          px: 3,
          position: "relative",
          zIndex: 1,
          maxWidth: 800,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "h3", md: "h1" },
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Quality Materials Trusted Results.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, color: "#ddd", fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          Dapatkan material berkualitas tinggi dengan harga terbaik untuk proyek
          konstruksi yang kokoh dan tahan lama!
        </Typography>
        <Button
          variant="contained"
          href="#products"
          sx={{
            mt: 3,
            backgroundColor: "#E74C3C",
            color: "white",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#C0392B" },
          }}
        >
          Lihat Products
        </Button>
      </Box>
    </Box>
  );
}
