import { useEffect, useState, useRef } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../server/database";

const useFirestoreCars = (selectedCar, setSelectedCar) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const fetchedMakes = useRef(false);
  const fetchedModels = useRef({});
  const fetchedModelDetails = useRef({});

  const FIRESTORE_YEAR = "2025"; // 🔥 Este es el año fijo de tu base de datos
  const { year, make, model } = selectedCar;

  // Obtener todas las marcas desde Cars/2025/Makes
  useEffect(() => {
    const fetchMakes = async () => {
      if (fetchedMakes.current) return;

      try {
        const makesCollection = collection(db, `Cars/${FIRESTORE_YEAR}/Makes`);
        const snapshot = await getDocs(makesCollection);
        const makesList = snapshot.docs.map((doc) => doc.id);
        setMakes(makesList);
        fetchedMakes.current = true;
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    };

    fetchMakes();
  }, []);

  // Obtener modelos desde Cars/2025/Makes/{make}/Model
  useEffect(() => {
    const key = `${make}`;
    if (!make || fetchedModels.current[key]) return;

    const fetchModels = async () => {
      try {
        const modelsCollection = collection(
          db,
          `Cars/${FIRESTORE_YEAR}/Makes/${make}/Model`
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
  }, [make]);

  // Obtener detalles del modelo desde Cars/2025/Makes/{make}/Model/{modelo}
  useEffect(() => {
    const key = `${make}_${model}`;
    if (!make || !model || fetchedModelDetails.current[key]) return;

    const fetchModelDetails = async () => {
      try {
        const modelDocRef = doc(
          db,
          `Cars/${FIRESTORE_YEAR}/Makes/${make}/Model/${model}`
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
  }, [make, model, setSelectedCar]);

  return { makes, models };
};

export default useFirestoreCars;
