import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Fade } from "@mui/material";

// Asegúrate de que las imágenes sean correctas
import job1Before from "../img/carro1.jpg";
import job1After from "../img/carro1.jpg";
import job2Before from "../img/porshe1.jpg";
import job2After from "../img/porshe1.jpg";
import job3Before from "../img/lambo.jpg";
import job3After from "../img/lambo.jpg";

interface Job {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  videoLink: string;
}

const allJobs: Job[] = [
  {
    id: 1,
    title: "Tesla Model S - Ceramic Finish",
    description: "Complete ceramic coating to protect the paint and enhance the gloss of the car.",
    beforeImage: job1Before,
    afterImage: job1After,
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "BMW M4 - Paint Correction",
    description: "Restoring the shine and smoothness of the paint, removing swirls and scratches.",
    beforeImage: job2Before,
    afterImage: job2After,
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Porsche 911 - Deep Interior Detail",
    description: "Deep clean and restoration of the interior, including leather conditioning and carpet shampoo.",
    beforeImage: job3Before,
    afterImage: job3After,
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const OurJobs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        minHeight: "100vh",
        py: 10,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box maxWidth="1300px" mx="auto">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#FFC300",
            fontFamily: "'FC 300', sans-serif",
            textAlign: "center",
            mb: 3,
          }}
        >
          🧽 Detailing Showcase
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#aaa",
            fontSize: "1.1rem",
            textAlign: "center",
            mb: 5,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Take a closer look at the transformations we’ve performed at JP Detailing. From luxury interiors to engine bay restorations, every project is treated with care, precision, and pride.
        </Typography>

        {/* Galería de trabajos */}
        <Grid container spacing={6}>
          {allJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Fade in timeout={600}>
                <Card
                  sx={{
                    backgroundColor: "#1E1E1E",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  {/* Sección de Antes y Después */}
                  <Box sx={{ position: "relative" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <CardMedia
                          component="img"
                          image={job.beforeImage}
                          alt={`Before: ${job.title}`}
                          sx={{ height: 200, objectFit: "cover" }}
                        />
                        <Typography variant="caption" sx={{ color: "#aaa", textAlign: "center" }}>Before</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <CardMedia
                          component="img"
                          image={job.afterImage}
                          alt={`After: ${job.title}`}
                          sx={{ height: 200, objectFit: "cover" }}
                        />
                        <Typography variant="caption" sx={{ color: "#aaa", textAlign: "center" }}>After</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FFC300",
                        fontFamily: "'FC 300', sans-serif",
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
                      {job.description}
                    </Typography>
                    {/* Botón para ver video */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        href={job.videoLink}
                        target="_blank"
                        sx={{
                          backgroundColor: "#FFC300",
                          color: "#0D0D0D",
                          fontWeight: "bold",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#ff9800",
                          },
                        }}
                      >
                        Watch the Transformation
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurJobs;
