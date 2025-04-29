import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { AVAILABLE_COLORS } from "../img/colors";
import { addOns } from "../components/Adds";

const steps = [
  "Select Package",
  "Select Car Type",
  "Contact Information",
  "Adds Selection",
  "Confirmation",
];

const selectStyles = {
  mt: 2,
  mb: 3,
  backgroundColor: "#c8c7c7",
  borderRadius: 2,
  "& .MuiSelect-select": {
    padding: "12px",
  },
  "& fieldset": {
    borderColor: "#877549",
  },
  "&:hover fieldset": {
    borderColor: "#877549",
  },
  "&.Mui-focused fieldset": {
    borderColor: "#FFC300",
  },
};

const Checkout = () => {
  const location = useLocation();
  const allPackages = location.state?.allPackages || {};
  const [selectedPackage, setSelectedPackage] = useState(location.state?.package || {});
  const [selectedCar] = useState(location.state?.car || {});
  const [carType, setCarType] = useState(location.state?.car?.body || "");
  const [selectedColor, setSelectedColor] = useState("");
  const [step, setStep] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleNext = () => {
    if (step === 1) {
      if (!carType || !selectedColor) {
        alert("Please select car type and color.");
        return;
      }
      localStorage.setItem("carInfo", JSON.stringify({ ...selectedCar, carType, selectedColor }));
    }
    if (step === 2) {
      if (!name || !phone || !email) {
        alert("Please complete contact info.");
        return;
      }
      localStorage.setItem("userContact", JSON.stringify({ name, phone, email }));
    }
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const extractPrice = (priceString) => {
    const match = priceString?.match(/[\d,.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const getBodyAdjustedPrice = () => {
    const basePrice = extractPrice(selectedPackage?.price);
    let adjusted = basePrice;
    if (carType.toLowerCase() === "suv") adjusted += 10;
    if (["pickup", "truck"].includes(carType.toLowerCase())) adjusted += 15;
    return adjusted;
  };

  const getAdjustedPrice = () => {
    let adjusted = getBodyAdjustedPrice();
    selectedAddOns.forEach((name) => {
      const found = Object.values(addOns).flat().find((a) => a.name === name);
      if (found) adjusted += extractPrice(found.price);
    });
    return adjusted;
  };

  const generateWhatsappMessage = () => {
    const totalPrice = getAdjustedPrice().toFixed(2);
    return `
  *New Detailing Service Order*
  
  *Package:* ${selectedPackage?.title}
  *Description:* ${selectedPackage?.subtitle}
  *Base Price:* ${selectedPackage?.price}
  *Adjusted Price:* $${getBodyAdjustedPrice().toFixed(2)}
  *Vehicle:* ${selectedCar.make} ${selectedCar.model} (${selectedCar.year})
  *Body Type:* ${carType}
  *Color:* ${selectedColor}
  *Add-ons:* ${selectedAddOns.length > 0 ? selectedAddOns.join(", ") : "None"}
  *Customer Name:* ${name}
  *Phone:* ${phone}
  *Email:* ${email}
  *Total Price:* $${totalPrice}
  `.trim();
  };

  const isLastStep = step === steps.length - 1;

  return (
    <Grid container spacing={2} sx={{ p: { xs: 2, md: 5 }, backgroundColor: "gray" }}>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            mb: 2,
            backgroundColor: "#646463",
            color: "#FFC300",
          }}
        >
          <CardContent sx={{ flex: "1" }}>
            <Typography variant="h6" fontWeight="bold">
              {selectedCar.make || "Select a Car"}
            </Typography>
            <Typography variant="body2">
              {selectedCar.model || "Model not selected"} - {selectedCar.year || "Year not selected"}
            </Typography>
          </CardContent>
          <Box sx={{ width: "100%", maxWidth: 150 }}>
            <img
              src={selectedCar.img || "https://via.placeholder.com/150"}
              alt="Selected Car"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>
        </Card>

        {/* Step 0: Package selection */}
        {step === 0 && (
          <Card sx={{ padding: "15px", mb: 2, backgroundColor: "grey" }}>
            <Typography variant="h6" fontWeight="bold" mb={1} sx={{ color: "#FFC300" }}>
              Select a Package
            </Typography>
            <Select
              value={selectedPackage?.id || ""}
              onChange={(e) => {
                const newPackage = Object.values(allPackages).flat().find((pkg) => pkg.id === e.target.value);
                if (newPackage) setSelectedPackage(newPackage);
              }}
              fullWidth
              sx={selectStyles}
              displayEmpty
              renderValue={(selected) =>
                selected
                  ? Object.values(allPackages).flat().find((pkg) => pkg.id === selected)?.title
                  : <span style={{ color: "Red" }}>Select a package</span>
              }
            >
              {Object.entries(allPackages).map(([category, packages]) =>
                packages.map((pkg) => (
                  <MenuItem key={pkg.id} value={pkg.id}>
                    {pkg.title} - {pkg.subtitle}
                  </MenuItem>
                ))
              )}
            </Select>

            {selectedPackage?.title && (
              <>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {selectedPackage.title}
                </Typography>
                <Typography variant="body2">{selectedPackage.subtitle}</Typography>
                <Typography variant="h5" fontWeight="bold" color="primary" mt={1}>
                  ${getAdjustedPrice().toFixed(2)}
                </Typography>
                <ul>
                  {selectedPackage.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </Card>
        )}

        {/* Step 1: Car type and color */}
        {step === 1 && (
          <>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              Select Your Car Type
            </Typography>
            <Select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              fullWidth
              displayEmpty
              sx={selectStyles}
              renderValue={(selected) =>
                selected ? selected : <span style={{ color: "#FFC300 !important" }}>Select car type</span>
              }
            >
              <MenuItem value="">
                <em>Select car type</em>
              </MenuItem>
              {selectedCar.body && <MenuItem value={selectedCar.body}>{selectedCar.body}</MenuItem>}
            </Select>

            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              Choose Car Color
            </Typography>
            <Select
              displayEmpty
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              fullWidth
              sx={selectStyles}
              renderValue={(selected) => (selected ? selected : <span style={{ color: "#888" }}>Select a color</span>)}
            >
              {AVAILABLE_COLORS.map((color, idx) => (
                <MenuItem key={idx} value={color}>
                  {color}
                </MenuItem>
              ))}
            </Select>
          </>
        )}

        {/* Step 2: Contact Info */}
        {step === 2 && (
          <>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Contact Information
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
              error={!name}
              helperText={!name ? "Name is required" : ""}
            />
            <TextField
              fullWidth
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 2 }}
              error={!/^\+?\d{7,15}$/.test(phone)}
              helperText={
                (!phone && "Phone number is required") ||
                (!/^\+?\d{7,15}$/.test(phone) && "Enter a valid phone number")
              }
            />
            <TextField
              fullWidth
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              error={!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)}
              helperText={
                (!email && "Email is required") ||
                (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) && "Enter a valid email address")
              }
            />
          </>
        )}

        {/* Step 3: Add-ons */}
        {step === 3 && (
          <>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Select Add-ons
            </Typography>
            {Object.entries(addOns).map(([category, items]) => (
              <Box key={category} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {category.toUpperCase()}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {items.map((item, idx) => {
                    const isSelected = selectedAddOns.includes(item.name);
                    return (
                      <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Card
                          onClick={() => {
                            setSelectedAddOns((prev) =>
                              isSelected ? prev.filter((name) => name !== item.name) : [...prev, item.name]
                            );
                          }}
                          sx={{
                            p: 2,
                            backgroundColor: isSelected ? "#FFC600" : "#f4f6f8",
                            cursor: "pointer",
                            borderRadius: 2,
                          }}
                        >
                          <Typography fontWeight="bold">{item.name}</Typography>
                          <Typography>{item.price}</Typography>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            ))}
          </>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card sx={{ padding: "20px", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Review & Confirm
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Package:</Typography>
              <Typography>{selectedPackage?.title} - {selectedPackage?.subtitle}</Typography>
              <Typography>Base Price: {selectedPackage?.price}</Typography>
              <Typography>Price with body type adjustment: ${getBodyAdjustedPrice().toFixed(2)}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Car Details:</Typography>
              <Typography>Make: {selectedCar?.make}</Typography>
              <Typography>Model: {selectedCar?.model}</Typography>
              <Typography>Year: {selectedCar?.year}</Typography>
              <Typography>Type: {carType}</Typography>
              <Typography>Color: {selectedColor}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Selected Add-ons:</Typography>
              {selectedAddOns.length === 0 ? (
                <Typography>No add-ons selected.</Typography>
              ) : (
                <ul>
                  {selectedAddOns.map((name, idx) => {
                    const addon = Object.values(addOns).flat().find((a) => a.name === name);
                    return <li key={idx}>{addon?.name} — {addon?.price}</li>;
                  })}
                </ul>
              )}
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Contact Info:</Typography>
              <Typography>Name: {name}</Typography>
              <Typography>Phone: {phone}</Typography>
              <Typography>Email: {email}</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                Total Price: ${getAdjustedPrice().toFixed(2)}
              </Typography>
            </Box>
          </Card>
        )}

        {/* Botón siguiente o enviar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF333", color: "white", fontWeight: "bold" }}
            onClick={() => {
              if (isLastStep) {
                const whatsappUrl = `https://wa.me/17865990988?text=${encodeURIComponent(generateWhatsappMessage())}`;
                window.location.href = whatsappUrl;
              } else {
                handleNext();
              }
            }}
          >
            {isLastStep ? "Finish & Send to WhatsApp" : "Next"}
          </Button>
        </Box>
      </Grid>

      {/* Stepper vertical en la derecha */}
      <Grid item xs={12} md={4}>
        <Stepper activeStep={step} orientation="vertical">
          {steps.map((stepLabel, index) => (
            <Step key={index}>
              <StepLabel>{stepLabel}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
