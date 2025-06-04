import { Box, Button, Typography, useMediaQuery, useTheme, Modal } from "@mui/material";
import { useState } from "react";
import photo1 from "../img/porshe1.jpg";
import photo2 from  "../img/g63.avif";
import ServicesCar from "./ServicesCar"; // Componente de selección de servicios
import '@fontsource/rajdhani/500.css'; // para subtítulos
import '@fontsource/rajdhani/700.css'; // para encabezados



const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")); // 600px - 1200px
  const isMidScreen = useMediaQuery("(max-width: 950px)");

  const [openModal, setOpenModal] = useState(false);

  
  const handleBookingClick = () => {
    setOpenModal(true); // Muestra el modal con el formulario de selección de servicios
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setOpenModal(false); // Cierra el modal
  };

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
  src={photo2}
  alt="Banner"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
     objectPosition: "10% 60%", 
    borderRadius: "12px",
  }}
/>

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
  sx={{
    fontWeight: 700,
    mb: 2,
    color: "white",
    fontFamily: "'Rajdhani', sans-serif",
    letterSpacing: 1,
    textTransform: "uppercase",
  }}
>
  Welcome to <br /> J&P Detailing
</Typography>

<Typography
  variant="body1"
  sx={{
    mb: 2,
    color: "white",
    fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
    fontWeight: 500,
    fontFamily: "'Rajdhani', sans-serif",
    letterSpacing: 0.5,
    textAlign: "center",
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
    fontWeight: 500,
    fontFamily: "'Rajdhani', sans-serif",
    textAlign: "center",
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
            fontFamily: "'Rajdhani', sans-serif",
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
          onClick={handleBookingClick} // Al hacer clic, se abre el modal de booking
        >
          Book a Service
        </Button>
      </Box>

      {/* Modal para booking */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            mt: "80px",
            mx: "auto",
            width: "100%",
            maxWidth: "1000px",
            height: "calc(100vh - 80px)",
            overflowY: "auto",
            color: "white",
            bgcolor: "black",
            p: 2,
            position: "relative",
          }}
        >
          {/* Cabecera del modal */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Booking Now</Typography>
            <Button
              onClick={handleCloseModal}
              sx={{ color: "#ffb300" }}
            >
              Close
            </Button>
          </Box>

          {/* Contenido del modal con el formulario de selección de servicios */}
          <ServicesCar onClose={handleCloseModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Banner;
