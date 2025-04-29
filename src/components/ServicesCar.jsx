import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButtonGroup,
  ToggleButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useFirestoreCars from "../server/hooks";
import carImage from "../img/BMW.webp";

const servicesData = {
  fullDetail: [
    {
      id: 1,
      title: "BASIC WASH",
      subtitle: "Maintenance",
      price: "Starting at $60.00",
      features: [
        "Exterior foam bath & hand wash",
        "Tire shine & spray wax",
        "Interior vacuum & wipedown",
        "Clean windows & doorjambs",
        "Trunk vacuum (if empty)",
      ],
    },
    {
      id: 2,
      title: "MINI DETAIL",
      subtitle: "Quick Full Detail",
      price: "Starting at $109.00",
      features: [
        "Exterior wax & rim cleaning",
        "Interior & trunk vacuum",
        "Leather cleaning & conditioning",
        "Light stain removal",
        "Window & doorjamb cleaning",
      ],
    },
    {
      id: 3,
      title: "MEDIUM DETAIL",
      subtitle: "Premium Full Detail",
      price: "Starting at $165.00",
      features: [
        "Clay bar & paint decontamination",
        "3-5 month paint protection",
        "Full wheel cleaning & tire dressing",
        "Detailed vacuum & wipe down",
        "Leather cleaning",
      ],
    },
  ],
  LuxuryDetail: [
    {
      id: 4,
      title: "JP DETAILING LUXURY",
      subtitle: "Showroom Ready",
      price: "Starting at $255.00",
      features: [
        "Clay bar & machine-applied wax",
        "High gloss polish (6–9 month protection)",
        "Steam clean interior corner to corner",
        "Shampoo seats & carpets / leather conditioning",
        "Silk dress plastics, full vacuum, air freshener",
      ],
    },
  ],
};

const ServicesCar = () => {
  const [selectedPackage, setSelectedPackage] = useState("fullDetail");
  const [selectedService, setSelectedService] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState({
    year: "",
    make: "",
    model: "",
    body: "",
    color: [],
    img: "",
  });

  const navigate = useNavigate();
  const { makes, models } = useFirestoreCars(selectedCar, setSelectedCar);

  const services = servicesData[selectedPackage];

  const handleChange = (event, newValue) => {
    if (newValue !== null) setSelectedPackage(newValue);
  };

  const handleSelectPackage = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleConfirmCar = () => {
    if (selectedService) {
      navigate("/checkout", {
        state: {
          package: selectedService,
          car: selectedCar,
          allPackages: servicesData,
        },
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Select A Car Detailing Package
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Choose from one of our packages to begin your ultimate car detailing experience.
      </Typography>

      <Box
        sx={{
          display: "inline-block",
          backgroundColor: "#2C2C2C",
          padding: "6px",
          borderRadius: "30px",
          boxShadow: 3,
          mb: 3,
        }}
      >
        <ToggleButtonGroup value={selectedPackage} exclusive onChange={handleChange}>
          {Object.keys(servicesData).map((key) => (
            <ToggleButton
              key={key}
              value={key}
              sx={{
                px: 3,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "30px",
                color: selectedPackage === key ? "black" : "#FFC300",
                backgroundColor: selectedPackage === key ? "#FFC600" : "transparent",
              }}
            >
              {key === "fullDetail" ? "Full Detail" : "Luxury Detail"}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          mb: 4,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            sx={{
              borderRadius: "15px",
              boxShadow: 3,
              padding: "10px",
              backgroundColor: "#2C2C2C",
              color: "#FFC300",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {service.subtitle}
              </Typography>
              <img
                src={selectedCar.img || carImage}
                alt={service.title}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "8px" }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {service.price}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textAlign: "left", mt: 1 }}
              >
                {selectedPackage === "fullDetail"
                  ? "Exterior Services"
                  : "Interior Services"}
              </Typography>
              <ul style={{ textAlign: "left", paddingLeft: "20px", margin: 0 }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "5px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#FFC600", color: "black" }}
                onClick={() => handleSelectPackage(service)}
              >
                Select Package
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: "10px",
            width: "90%",
            maxWidth: "320px",
            mx: "auto",
            my: "20vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Select Your Car
          </Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Year</InputLabel>
            <Select
              value={selectedCar.year || ""}
              onChange={(e) =>
                setSelectedCar((prev) => ({
                  ...prev,
                  year: e.target.value,
                  make: "",
                  model: "",
                }))
              }
              label="Year"
              defaultValue=""
            >
              <MenuItem value={2025}>2025</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedCar.year}>
            <InputLabel>Make</InputLabel>
            <Select
              value={selectedCar.make || ""}
              onChange={(e) =>
                setSelectedCar((prev) => ({
                  ...prev,
                  make: e.target.value,
                  model: "",
                }))
              }
              label="Make"
              defaultValue=""
            >
              {makes.map((make) => (
                <MenuItem key={make} value={make}>
                  {make}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedCar.make}>
            <InputLabel>Model</InputLabel>
            <Select
              value={selectedCar.model || ""}
              onChange={(e) =>
                setSelectedCar((prev) => ({
                  ...prev,
                  model: e.target.value,
                }))
              }
              label="Model"
              defaultValue=""
            >
              {models.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleConfirmCar}
            disabled={!selectedCar.year || !selectedCar.make || !selectedCar.model}
            sx={{ mt: 2 }}
          >
            Confirm
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ServicesCar;
