import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.PNG";
import { Link, useLocation } from "react-router-dom";
import { amber } from "@mui/material/colors";
import ServicesCar from "./ServicesCar";
import AboutUs from '../components/Aboutus';
import OurJobs from "../components/OurJobs";


const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const coloramber = amber[600];
  const location = useLocation();

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  // 🔄 Cierra el modal cuando cambia la ruta
  useEffect(() => {
    setOpenModal(false);
  }, [location]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const displayMobile = () => (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
      </Link>
  
      {location.pathname === "/checkout" ? (
        <Button sx={{ color: "#ffb300" }} component={Link} to="/">
          Home
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            sx={{ color: "white", backgroundColor: coloramber }}
            onClick={() => setOpenModal(true)}
          >
            Booking
          </Button>
          <IconButton sx={{ color: "#ffb300" }} onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
          component={Link}
          to="/"
          onClick={() => {
          handleClose();
         window.scrollTo({ top: 0, behavior: "smooth" });
         }}
>
  Home
</MenuItem>
            <MenuItem
  component={Link}
  to="/OurJobs"
  onClick={handleClose}
>
Our Jobs
</MenuItem>
            <MenuItem
  component={Link}
  to="/Aboutus"
  onClick={handleClose}
>
  About Us
</MenuItem>
          </Menu>
        </>
      )}
    </Toolbar>
  );
  
  const displayDesktop = () => (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "80px" }} />
      </Link>
  
      <div>
        {location.pathname === "/checkout" ? (
          
          <Button sx={{ color: "#ffb300" }} component={Link} to="/">
            Home
          </Button>

          
        ) : (
          <>
            <Button sx={{ color: "#ffb300" }} onClick={() => setOpenModal(true)}>
              Booking online
            </Button>
            <Button
            sx={{ color: "#ffb300" }}
            component={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, })}
            >Home
            </Button>

            <Link to="/OurJobs" style={{ textDecoration: "none" }}>
        <Button sx={{ color: "#ffb300" }}>
          Our Jobs
        </Button>
      </Link>
            <Button
            sx={{ color: "#ffb300" }}
            component={Link}
            to="/Aboutus"
>
  About us
</Button>

          </>
        )}
      </div>
    </Toolbar>
  );
  
  

  return (
    <>
      {/* Header fijo */}
      <AppBar position="fixed" elevation={1}>
        {mobile ? displayMobile() : displayDesktop()}
      </AppBar>

      {/* Relleno para compensar AppBar fijo */}
      <Toolbar />

      {/* Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
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
            <Typography variant="h6">Booking now</Typography>
            <Button
              onClick={() => setOpenModal(false)}
              sx={{ color: "#ffb300" }}
            >
              Close
            </Button>
          </Box>

          {/* Contenido del modal */}
          <ServicesCar onClose={() => setOpenModal(false)} />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
