"use client";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to bottom, #172B58, #3058A6)",
        color: "white",
        py: 6,
        borderTop: "4px solid #D61F26",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ px : 0 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Kolom 1: Tentang Kami */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sri Bumi Sekar
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, maxWidth: "300px", mx: "auto" }}
            >
              Kami menyediakan bahan bangunan berkualitas dengan harga terbaik
              dan layanan profesional.
            </Typography>
          </Grid>

          {/* Kolom 2: Layanan Kami */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Layanan Kami
            </Typography>
            <Box>
              {[
                "Pengiriman Cepat",
                "Konsultasi Gratis",
                "Garansi Produk",
                "Custom Material",
              ].map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ display: "block", mb: 1, opacity: 0.8 }}
                >
                  ✅ {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Kolom 3: Kontak */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Hubungi Kami
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              📧 sribumisekar@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              📞 +62 895-3131-0890
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              📍 Jl. Raya Bangun No. 123, Jakarta
            </Typography>

            {/* Ikon Media Sosial */}
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              gap={1}
              flexWrap="wrap"
            >
              {[
                { icon: <Facebook />, url: "https://facebook.com" },
                { icon: <Instagram />, url: "https://instagram.com" },
                { icon: <Twitter />, url: "https://twitter.com" },
                { icon: <YouTube />, url: "https://youtube.com" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    transition: "transform 0.3s",
                    "&:hover": { color: "#ff9800", transform: "scale(1.2)" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          textAlign="center"
          mt={4}
          pt={2}
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Sri Bumi Sekar.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
