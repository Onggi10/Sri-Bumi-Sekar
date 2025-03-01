import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const aboutData = [
  {
    title: "HI-TECH ADHESIVE BOND",
    description:
      "Smortar instan berbasis semen yang digunakan sebagai perekat bata ringan (hebel) dan campuran waterproofing. Dikemas dalam karung dengan kombinasi warna merah dan putih serta logo SBS yang besar. Produk ini memiliki keunggulan dalam kemudahan aplikasi, daya rekat tinggi, serta daya tahan yang baik terhadap kelembaban.",
    image: "/images/Semen Baru.jpeg",
  },
  {
    title: "MULTIMAX-SEAL & CONCRETE ADDITIVE",
    description:
      "untuk meningkatkan daya rekat semen agar lebih tahan air, digunakan untuk plasteran lantai serta sebagai lapisan kedap air. Beberapa keunggulannya antara lain ekonomis, mudah diaplikasikan, dan membantu mencegah beton menyerap air.",
    image: "/images/Product Cairan.jpeg",
  },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      justifyContent="center"
      sx={{ py: 10, px: { xs: 4, md: 10 }, overflow: "hidden" }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", mb: 10, textAlign: "center" }}
      >
        About Us
      </Typography>

      {aboutData.map((item, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            mb: 8,
            overflow: "hidden", // 🔥 Hindari scroll
          }}
        >
          {/* Gambar */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center", // 🔥 Pastikan gambar tetap di tengah
                alignItems: "center",
                width: "100%",
                overflow: "hidden", // 🔥 Hindari gambar melebihi ukuran
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                style={{
                  maxWidth: "90%", // 🔥 Pastikan tidak lebih besar dari parent
                  height: "auto",
                  borderRadius: "10px",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>

          {/* Deskripsi */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
