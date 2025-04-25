import { createContext, useState, useContext } from "react";

// 1️⃣ Crear el contexto
const ServiceContext = createContext();

// 2️⃣ Hook personalizado para usar el contexto
export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService debe estar dentro de un ServiceProvider");
  }
  return context;
};

// 3️⃣ Proveedor del contexto
export const ServiceProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  return (
    <ServiceContext.Provider value={{ selectedPackage, setSelectedPackage, selectedAddOns, setSelectedAddOns }}>
      {children}
    </ServiceContext.Provider>
  );
};
