import React, { useLayoutEffect, useRef } from "react";
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
import PhoneIcon from "@mui/icons-material/Phone";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./footer";

// Registrar GSAP plugin

// Imágenes del showcase antes/después
import job1Before from "../img/carro1.jpg";
import job1After from "../img/carro1.jpg";
import job2Before from "../img/porshe1.jpg";
import job2After from "../img/porshe1.jpg";
import job3Before from "../img/lambo.jpg";
import job3After from "../img/lambo.jpg";

// Imágenes del carrusel horizontal
import img1 from "../img/Clean.webp";
import img2 from "../img/Ram.webp";
import img3 from "../img/MCCR.webp";
import img4 from "../img/Mustang.webp";
import img5 from "../img/Porshec.webp";
import img6 from "../img/MRC.webp";
import img7 from "../img/mcrclin.webp";
import img8 from "../img/Carclinjp.webp";
import vd1 from "../assets/video1.mp4";
import vd2 from "../assets/video2.mp4";
import vd3 from "../assets/video3.mp4";
import vd4 from "../assets/video4.mp4";

gsap.registerPlugin(ScrollTrigger);


// Datos de trabajos
const allJobs = [
  {
    id: 1,
    title: "Bentley - Ceramic Finish",
    description:
      "Complete ceramic coating to protect the paint and enhance the gloss of the car.",
    beforeImage: job1Before,
    afterImage: job1After,
    whatsappLink:
      "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",
  },
  {
    id: 2,
    title: "Lamborghini Urus - Paint Correction",
    description:
      "Restoring the shine and smoothness of the paint, removing swirls and scratches.",
    beforeImage: job3Before,
    afterImage: job3After,
    whatsappLink:
      "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",
  },
  {
    id: 3,
    title: "Porsche 911 - Deep Interior Detail",
    description:
      "Deep clean and restoration of the interior, including leather conditioning and carpet shampoo.",
    beforeImage: job2Before,
    afterImage: job2After,
    whatsappLink:
      "https://wa.me/17865990988?text=Hello%2C%20I%20would%20like%20more%20information%20about%20JP%20Detailing.",
  },
];


const HorizontalGallery = () => {
  const galleryRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      if (!containerRef.current || panels.length === 0) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: galleryRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: "top top",
          end: () => `+=${window.innerWidth * (panels.length - 1)}`,
        },
      });
    }, galleryRef);

    return () => ctx.revert(); // elimina animaciones y trigger sin errores
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <Box
      ref={galleryRef}
      sx={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          height: "100vh",
          width: `${images.length * 100}vw`,
        }}
      >
        {images.map((img, idx) => (
          <Box
            key={idx}
            className="panel"
            sx={{
              flex: "0 0 100vw",
              height: "100vh",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Job ${idx + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>
      
    </Box>
  );
};


// Video showcase
const VideoShowcase = () => {
  const videos = [
    { title: "Shampoo seats in Action", url: vd1, type: "local" },
    { title: "Interior Deep Cleaning", url: vd2, type: "local" },
    { title: "Paint Correction Time-lapse", url: vd3, type: "local" },
    { title: " Ceramic Coating in Action", url: vd4, type: "local" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        py: 10,
        px: { xs: 2, md: 6 },
        color: "#fff",
      }}
    >
      <Box maxWidth="1300px" mx="auto">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#FFC300",
            fontFamily: "'FC 300', sans-serif",
            mb: 4,
          }}
        >
          🎥 Our Process in Motion
        </Typography>

        <Grid container spacing={4}>
          {videos.map((video, idx) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={idx}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, textAlign: "center", color: "#aaa" }}
              >
                {video.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

// Componente principal
const OurJobs = () => {
  return (
    <>
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
                    <Stack
                      direction="row"
                      spacing={0}
                      sx={{ overflow: "hidden", height: 200 }}
                    >
                      <Box flex={1}>
                        <CardMedia
                          component="img"
                          image={job.beforeImage}
                          alt="Before"
                          sx={{ height: "100%", objectFit: "cover" }}
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
                          sx={{ height: "100%", objectFit: "cover" }}
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

      <VideoShowcase />
      <HorizontalGallery />
      <Footer/>
      
    </>
    
  );
};

export default OurJobs;
