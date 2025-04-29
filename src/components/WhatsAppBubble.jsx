import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/17865990988?text=Hello%2C%20I%20want%20more%20information"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 35 }} />
    </a>
  );
};

export default WhatsAppBubble;
