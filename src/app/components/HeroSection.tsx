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
        height: "100vh",
        minHeight: { xs: "400px", sm: "500px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        margin: 0,
        paddingTop: { xs: "56px", md: "64px" }, // 🚀 Tambahkan padding agar tidak tertutup navbar
        scrollMarginTop: "0px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.4)", // Overlay lebih gelap
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          px: { xs: 2, sm: 3 },
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "90%", sm: 800 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "3rem" },
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          QUALITY MATERIALS TRUSTED RESULTS.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#ddd",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            maxWidth: "90%",
            mx: "auto",
          }}
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
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
            "&:hover": { backgroundColor: "#C0392B" },
          }}
        >
          Lihat Produk
        </Button>
      </Box>
    </Box>
  );
}
