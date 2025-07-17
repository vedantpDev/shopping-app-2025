import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Dashboard from "../Dashboard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  setAllProduct,
  setHomeApplianceData,
  setLaptopData,
  setMobileData,
  setTVData,
  setWashingMachineData,
} from "../../store/productDataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [allProductData, setAllProductData] = useState([]);

  useEffect(() => {
    (async () => {
      let arrayData = [];
      const querySnapshot = await getDocs(collection(db, "product-data"));
      querySnapshot.forEach((doc) =>
        arrayData.push({ id: doc.id, ...doc.data() })
      );
      let allProductArray = [];

      arrayData.map((data) => {
        allProductArray.push(data.data);
      });
      dispatch(setAllProduct(allProductArray.flat()));

      arrayData?.map((productData) => {
        if (productData.type === "washing-machine") {
          dispatch(setWashingMachineData(productData.data));
        } else if (productData.type === "home-appliance") {
          dispatch(setHomeApplianceData(productData.data));
        } else if (productData.type === "tv") {
          dispatch(setTVData(productData.data));
        } else if (productData.type === "mobile") {
          dispatch(setMobileData(productData.data));
        } else if (productData.type === "laptop") {
          dispatch(setLaptopData(productData.data));
        }
      });
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
