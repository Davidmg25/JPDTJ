import { useEffect, useState, useRef } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../server/database";

const useFirestoreCars = (selectedCar, setSelectedCar) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const fetchedMakes = useRef({});
  const fetchedModels = useRef({});
  const fetchedModelDetails = useRef({});

  const { year, make, model } = selectedCar;

  // Obtener marcas
  useEffect(() => {
    const fetchMakes = async () => {
      if (!year || fetchedMakes.current[year]) return;

      try {
        const makesCollection = collection(db, `Cars/${year}/Makes`);
        const snapshot = await getDocs(makesCollection);
        const makesList = snapshot.docs.map((doc) => doc.id);
        setMakes(makesList);
        fetchedMakes.current[year] = makesList;
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    };

    fetchMakes();
  }, [year]);

  // Obtener modelos
  useEffect(() => {
    const fetchModels = async () => {
      const key = `${year}_${make}`;
      if (!year || !make || fetchedModels.current[key]) return;

      try {
        const modelsCollection = collection(
          db,
          `Cars/${year}/Makes/${make}/Model`
        );
        const snapshot = await getDocs(modelsCollection);
        const modelsList = snapshot.docs.map((doc) => doc.id);
        setModels(modelsList);
        fetchedModels.current[key] = modelsList;
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, [year, make]);

  // Obtener detalles del modelo
  useEffect(() => {
    const fetchModelDetails = async () => {
      const key = `${year}_${make}_${model}`;
      if (!year || !make || !model || fetchedModelDetails.current[key]) return;

      try {
        const modelDocRef = doc(
          db,
          `Cars/${year}/Makes/${make}/Model/${model}`
        );
        const modelSnap = await getDoc(modelDocRef);
        if (modelSnap.exists()) {
          const data = modelSnap.data();
          setSelectedCar((prev) => ({
            ...prev,
            body: data.Body || "",
            colors: data.Color || [],
            img: data.img || "",
          }));
          fetchedModelDetails.current[key] = true;
        }
      } catch (error) {
        console.error("Error fetching model details:", error);
      }
    };

    fetchModelDetails();
  }, [year, make, model, setSelectedCar]);

  // Mostrar datos desde caché si existen
  useEffect(() => {
    if (year && fetchedMakes.current[year]) {
      setMakes(fetchedMakes.current[year]);
    }

    const modelKey = `${year}_${make}`;
    if (fetchedModels.current[modelKey]) {
      setModels(fetchedModels.current[modelKey]);
    }
  }, [year, make]);

  return { makes, models };
};

export default useFirestoreCars;
