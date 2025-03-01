"use client";
import {
  Box,
  Button,
  Modal,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

// Definisi tipe untuk produk
interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

// Props untuk komponen modal
interface ProductDetailModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  open,
  product,
  onClose,
}: ProductDetailModalProps) {
  if (!product) return null; // Jika tidak ada produk, modal tidak muncul

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        sx={{
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: 3,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          p: 3,
        }}
      >
        <Card sx={{ boxShadow: "none", bgcolor: "transparent" }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              width: "100%", // Lebar gambar menyesuaikan kontainer
              maxHeight: 400, // Maksimum tinggi agar tidak terlalu besar
              objectFit: "contain", // Gambar tetap proporsional
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
          />
          <CardContent>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ my: 2 }}>
              {product.description}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{
                mt: 2,
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: "bold",
              }}
              onClick={onClose}
            >
              Tutup
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}
