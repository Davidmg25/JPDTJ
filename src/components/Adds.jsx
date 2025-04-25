import { Box, Grid, Typography, Divider } from "@mui/material";
const addOns = {
  favorites: [
    { name: "Engine Bay Detail", price: "$29.99" },
    { name: "Headlight Restoration", price: "$59.99" },
    { name: "Steam  Headliner (roof)", price: "$39.99" },
    { name: "Shampoo Carpets & Mats", price: "$59.99" },
    { name: "Shampoo Seats", price: "$79.99" },
  ],
  sparkle: [
    { name: "Water Spots Removal", price: "$69.99" },
    { name: "Wax Application", price: "$39.99" },
    { name: "Plastic Dressing", price: "$39.99" },
    { name: "Bug Removal", price: "$14.99" },
  ],
  comfort: [
    { name: "Leather Conditioning", price: "$24.99" },
    { name: "Pet Hair Removal", price: "$39.99" },
    { name: "Shampoo Carpets", price: "$9.99" },
    { name: "Shampoo Seats", price: "$79.99" },
    { name: "/Steam Headliner(roof)", price: "$39.99" },
  ],
  protection: [
    { name: "Clay Bar Treatment", price: "$59.99" },
    { name: "Baby Car Seat Cleaning", price: "$29.99"  },
    { name: "Engine Cleaning", price: "$39.99" },
    { name: "Headlight Restoration", price: "$59.99" },
    { name: "Mold Removal", price: "$69.99" },
  ],
};
;

const Adds = () => {
  const renderAddOnSection = (title, items) => (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items.map((addOn, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h6" sx={{ display: "flex", justifyContent: "space-between" }}>
              ✅ {addOn.name} <span>+ {addOn.price}</span>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 3, borderColor: "#FFC300" }} />
    </>
  );

  return (
    <Box sx={{ backgroundColor: "#2C2C2C", color: "#FFC300", padding: "40px", borderRadius: "10px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        Add-ons:
      </Typography>

      {renderAddOnSection("⭐ Favorites", addOns.favorites)}
      {renderAddOnSection("✨ Sparkle", addOns.sparkle)}
      {renderAddOnSection("🛋️ Comfort", addOns.comfort)}
      {renderAddOnSection("🛡️ Protection", addOns.protection)}
    </Box>
  );
};

export { addOns };

export default Adds;
