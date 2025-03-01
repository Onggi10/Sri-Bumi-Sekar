import { Box, Grid, Paper, Typography } from "@mui/material";

export default function TestimonialsSection() {
  return (
    <Box
      id="testimoni"
      component="section"
      sx={{
        my: 4,
        px: 6, py: 10,
        borderRadius: 2,
        minHeight: "100vh",
        scrollMarginTop: "80px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", mb: 6, textAlign: "center" }}
      >
        Testimoni Pelanggan
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center", boxShadow: 2 }}>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "Pelayanan cepat dan produk berkualitas. Sangat memuaskan!"
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              - Budi, Jakarta
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center", boxShadow: 2 }}>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "Harga kompetitif dan produk unggulan. Rekomendasi!"
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              - Sari, Bandung
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center", boxShadow: 2 }}>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "Kualitas produk luar biasa. Saya akan kembali membeli lagi."
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              - Andi, Surabaya
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
