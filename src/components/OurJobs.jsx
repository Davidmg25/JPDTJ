import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Fade,
  Stack,
} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
// Imágenes
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
    title: "Bentley - Ceramic Finish",
    description:
      "Complete ceramic coating to protect the paint and enhance the gloss of the car.",
    beforeImage: job1Before,
    afterImage: job1After,
    whatsappLink : "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",

  },
  {
    id: 2,
    title: "Lamborghini urus - Paint Correction",
    description:
      "Restoring the shine and smoothness of the paint, removing swirls and scratches.",
    beforeImage: job3Before,
    afterImage: job3After,
    whatsappLink : "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",
  
  },
  {
    id: 3,
    title: "Porsche 911 - Deep Interior Detail",
    description:
      "Deep clean and restoration of the interior, including leather conditioning and carpet shampoo.",
    beforeImage: job2Before,
    afterImage: job2After,
    whatsappLink : "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",
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
          ✨ Detailing Showcase
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#aaa",
            fontSize: "1.1rem",
            textAlign: "center",
            mb: 6,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Explore the art of transformation with JP Detailing. Each project is
          executed with passion, precision, and high-end products to deliver
          stunning results.
        </Typography>

        <Grid container spacing={6}>
          {allJobs.map((job, idx) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Fade in timeout={800 + idx * 300}>
                <Card
                  sx={{
                    backgroundColor: "#1A1A1A",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={0} sx={{ overflow: "hidden" }}>
                    <Box flex={1}>
                      <CardMedia
                        component="img"
                        image={job.beforeImage}
                        alt="Before"
                        sx={{ height: 200, objectFit: "cover" }}
                      />
                      <Typography
                        variant="caption"
                        display="block"
                        textAlign="center"
                        sx={{ color: "#888", py: 0.5 }}
                      >
                        Before
                      </Typography>
                    </Box>
                    <Box flex={1}>
                      <CardMedia
                        component="img"
                        image={job.afterImage}
                        alt="After"
                        sx={{ height: 200, objectFit: "cover" }}
                      />
                      <Typography
                        variant="caption"
                        display="block"
                        textAlign="center"
                        sx={{ color: "#888", py: 0.5 }}
                      >
                        After
                      </Typography>
                    </Box>
                  </Stack>

                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FFC300",
                        fontFamily: "'FC 300', sans-serif",
                        mb: 1,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", mb: 2, lineHeight: 1.6 }}
                    >
                      {job.description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
  variant="contained"
  href={job.whatsappLink}
  target="_blank"
  startIcon={<PhoneIcon />}
  sx={{
    backgroundColor: "#FFC300",
    color: "#0D0D0D",
    fontWeight: "bold",
    borderRadius: 8,
    textTransform: "none",
    px: 3,
    py: 1,
    "&:hover": {
      backgroundColor: "#ff9900",
    },
  }}
>
  Contact now
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
