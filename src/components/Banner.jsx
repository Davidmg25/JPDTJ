import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import photo1 from "../img/porshe1.jpg";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")); // 600px - 1200px
  const isMidScreen = useMediaQuery("(max-width: 950px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Siempre en fila (imagen izquierda, texto derecha)
        flexWrap: "wrap", // Permite que se acomode en pantallas pequeñas sin invertir el orden
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "20px",
        width: "100%",
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          flex: isMobile ? "1 1 100%" : "1 1 60%",
          height: isMobile ? 250 : isTablet ? 400 : 550,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          padding: isMobile ? 0 : 2,
        }}
      >
        <img
          src={photo1}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          flex: isMobile ? "1 1 100%" : "1 1 40%",
          maxWidth: 600,
          textAlign: isMobile ? "center" : "left",
          padding: isMobile ? "20px 10px" : "0 40px",
        }}
      >
        <Typography
          variant={isMobile || isMidScreen ? "h4" : "h2"}
          sx={{ fontWeight: "bold", mb: 2, color: "white" }}
        >
          Welcome to <br /> J&P DETALLING
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
            fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
          }}
        >
          Get your ride shining like new! The best car detailing in town, just one click away.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "white",
            fontSize: isMobile ? "1rem" : isTablet ? "1.3rem" : "1.5rem",
          }}
        >
          Car detailing from the comfort of your home or office.
        </Typography>

        <Button
          variant="contained"
          fullWidth={isMobile}
          sx={{
            backgroundColor: "#ffb300",
            color: "#000",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "30px",
            padding: "12px 24px",
            fontSize: "1rem",
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
