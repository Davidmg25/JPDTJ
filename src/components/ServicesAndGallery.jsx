import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

import lambo from '../img/lambo.jpg';
import carro1 from '../img/carro1.jpg';
import porshe from '../img/porshe1.jpg';
import ferrari from '../img/ferrari.jpg'

const packages = [
  {
    id: 1,
    title: "✨ Basic Refresh",
    tagline: "Start Fresh, Feel Sharp",
    description:
      "Ideal for the everyday driver who wants to feel clean and confident. A quick refresh that brings back the shine and comfort your car deserves.",
    priceFrom: "$60",
    mediaType: "image",
    mediaUrl: carro1,
  },
  {
    id: 2,
    title: "🚗 Urban Revival",
    tagline: "Bring Back the Wow",
    description:
      "Designed for busy city cars that need that extra love. We clean, condition and revive the inside and out so your ride looks like new again.",
    priceFrom: "$109",
    mediaType: "image",
    mediaUrl: ferrari,
  },
  {
    id: 3,
    title: "💎 Executive Glow",
    tagline: "Because Details Matter",
    description:
      "For those who settle for nothing but excellence. Paint decontamination, deep leather care, and long-lasting shine – we go the extra mile, so your car does too.",
    priceFrom: "$165",
    mediaType: "image",
    mediaUrl: porshe,
  },
  {
    id: 4,
    title: "👑 The Royal Treatment",
    tagline: "Not Just a Detail — An Experience",
    description:
      "Luxury-level detailing for premium vehicles. We perfect every inch with precision and passion. Ideal for car enthusiasts and special occasions.",
    priceFrom: "$255",
    mediaType: "image",
    mediaUrl: lambo,
  },
];

const ModernServicePackages = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Box maxWidth="1200px" mx="auto">
        <Typography
          variant="h3"
          sx={{
            color: "#FFC300",
            fontWeight: 700,
            textAlign: "center",
            mb: 8,
          }}
        >
          ✨ Premium Detailing Packages
        </Typography>

        <Grid container spacing={6}>
          {packages.map((pkg) => (
            <Grid item xs={12} md={6} key={pkg.id}>
              <Card
                sx={{
                  backgroundColor: "#2B2B2B",
                  borderRadius: 4,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  ":hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {pkg.mediaType === "image" ? (
                  <CardMedia
                    component="img"
                    image={pkg.mediaUrl}
                    alt={pkg.title}
                    sx={{
                      height: { xs: 220, md: 260 },
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                ) : (
                  <CardMedia
                    component="video"
                    src={pkg.mediaUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                      height: { xs: 220, md: 260 },
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                )}

                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "#FFC300", fontWeight: "bold", mb: 1 }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#FFD95A", opacity: 0.8, mb: 2 }}
                  >
                    {pkg.tagline}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#f0f0f0",
                      mb: 3,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {pkg.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFC300", fontWeight: "medium" }}
                  >
                    Starting at {pkg.priceFrom}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ModernServicePackages;
