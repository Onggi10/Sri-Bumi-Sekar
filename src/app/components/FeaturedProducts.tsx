"use client";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProductDetailModal from "./ProductDetailModal";
import { products, Product } from "../data/products";

const MotionBox = motion(Box);

export default function FeaturedProducts() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const categories = ["Semua", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box
      component="section"
      id="products"
      sx={{
        my: 4,
        minHeight: "100vh",
        scrollMarginTop: "80px",
        px: { xs: 6, md: 10 },
        py: 10,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", mb: 6, textAlign: "center" }}
      >
        Produk Unggulan
      </Typography>

      {/* Filter Kategori */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            color="error"
            onClick={() => setSelectedCategory(category)}
            sx={{
              mx: 1,
              color: selectedCategory === category ? "white" : "error",
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Grid Produk dengan Animasi */}
      <Grid container spacing={2} justifyContent="center">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  border: "1px solid #ddd",
                  p: 2,
                  background: "#ffff",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: { xs: "200px", md: "300px" }, // Ukuran gambar lebih kecil di mobile
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      aspectRatio: "1 / 1", // Menjaga rasio aspek gambar
                    }}
                  />
                </Box>

                <Box sx={{ flexGrow: 1, textAlign: "center", mt: 2 }}>
                  <Typography variant="h5">{product.name}</Typography>
                </Box>

                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2, alignSelf: "center", width: "100%" }}
                  onClick={() => handleOpen(product)}
                >
                  Detail
                </Button>
              </MotionBox>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      {/* Modal Detail Produk */}
      <ProductDetailModal
        open={open}
        product={selectedProduct}
        onClose={handleClose}
      />
    </Box>
  );
}
