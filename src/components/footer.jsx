import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#f0f0f0",
        py: 6,
        px: { xs: 3, md: 10 },
        mt: 10,
      }}
    >
      <Grid container spacing={4}>
        {/* Logo / Brand Name */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ color: "#FFC300", fontWeight: "bold", mb: 1 }}>
            J&P Detailing
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            We transform your car with passion and precision. Premium detailing for those who demand the best.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={4}>
          <Typography variant="h6" sx={{ color: "#FFC300", mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <RouterLink
               to="/Ourjobs"
              style={{ textDecoration: "none", color: "inherit", opacity: 0.8 }}
              onMouseEnter={(e) => (e.target.style.color = "#FFC300")}
              onMouseLeave={(e) => (e.target.style.color = "inherit")}
              >
             Ours Jobs
            </RouterLink>
            <RouterLink
              to="/aboutus"
              style={{ textDecoration: "none", color: "inherit", opacity: 0.8 }}
              onMouseEnter={(e) => (e.target.style.color = "#FFC300")}
              onMouseLeave={(e) => (e.target.style.color = "inherit")}
            >
              About Us
            </RouterLink>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={6} md={4}>
          <Typography variant="h6" sx={{ color: "#FFC300", mb: 1 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#FFC300" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/jp_detailing05?igsh=MW42a3ZxejBiYTc2dw%3D%3D&utm_source=qr" target="_blank" sx={{ color: "#FFC300" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://wa.me/1234567890" target="_blank" sx={{ color: "#25D366" }}>
              <WhatsApp />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Box mt={5} borderTop="1px solid #444" pt={3} textAlign="center">
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} J&P Detailing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
