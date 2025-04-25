import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import photo1 from "../img/porshe1.jpg";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")); // 600px - 1200px
  const isMidScreen = useMediaQuery("(max-width: 950px)"); // Específico para 921px

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "5px 5px",
        textAlign: isMobile ? "center" : "left",
        width: "100%",
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          width: isMobile ? "100%" : isTablet ? "45%" : "80%",
          height: isMobile ? "250px" : isTablet ? "450px" : "600px", // Ajuste altura
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={photo1}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: isMobile ? "0px" : "10px",
          }}
        />
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          width: isMobile ? "90%" : "50%",
          maxWidth: isMidScreen ? "550px" : "600px", // Evita texto demasiado ancho
          padding: isMobile ? "20px" : isMidScreen ? "0 50px" : isTablet ? "0 80px" : "0 120px",
        }}
      >
        <Typography
          variant={isMobile ? "h3" : isMidScreen ? "h4" : "h2"}
          sx={{ fontWeight: "bold", mb: 2, color: "white" }}
        >
          Welcome to <br /> J&P DETALLING
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
            fontSize: isMobile ? "1.5rem" : isMidScreen ? "1.6rem" : isTablet ? "1.8rem" : "2.2rem",
          }}
        >
          Get your ride shining like new! The best car detailing in town, just one click away.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: "white",
            fontSize: isMobile ? "1.2rem" : isMidScreen ? "1.3rem" : isTablet ? "1.5rem" : "2rem",
          }}
        >
          Car detailing from the comfort of your home or office.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#ffb300",
            color: "#000",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "30px",
            padding: "12px 24px",
            maxWidth: isMobile ? "100%" : "100%",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0px 5px 5px rgba(234, 199, 44, 0.5)",
            "&:hover": {
              backgroundColor: "#ffb300",
              transform: "scale(1.05)",
              boxShadow: "0px 8px 8px rgba(255, 202, 9, 0.7)",
            },
          }}
        >
          Search services
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
