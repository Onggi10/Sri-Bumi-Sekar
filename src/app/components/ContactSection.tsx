"use client";

import { useState, useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_w4r2vsr", // Ganti dengan Service ID EmailJS
        "template_7gabsmi", // Ganti dengan Template ID EmailJS
        formData,
        "6NOIneYlwyUxCmArr" // Ganti dengan Public Key EmailJS
      )
      .then(
        (result) => {
          console.log("Email berhasil dikirim:", result.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" }); // Reset state form
          if (formRef.current) formRef.current.reset(); // Reset form HTML
        },
        (error) => {
          console.log("Gagal mengirim email:", error.text);
          alert("Gagal mengirim pesan. Coba lagi!");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        my: 4,
        px: 6,
        py: 10,
        minHeight: "100vh",
        scrollMarginTop: "80px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", mb: 6, textAlign: "center" }}
      >
        Hubungi Kami
      </Typography>
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        <Box
          component="form"
          ref={formRef}
          onSubmit={sendEmail}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Nama"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Pesan"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            fullWidth
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </Button>
        </Box>
        {success && (
          <Typography color="success.main" sx={{ mt: 2, textAlign: "center" }}>
            ✅ Pesan berhasil dikirim!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
