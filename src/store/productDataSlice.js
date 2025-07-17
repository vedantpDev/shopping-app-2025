import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileData: [],
  laptopData: [],
  tvData: [],
  washingMachineData: [],
  homeAppliance: [],
  allProduct: [],
  cartProducts: [],
};

export const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
    setMobileData: (state, action) => {
      state.mobileData = action.payload;
    },
    setLaptopData: (state, action) => {
      state.laptopData = action.payload;
    },
    setTVData: (state, action) => {
      state.tvData = action.payload;
    },
    setWashingMachineData: (state, action) => {
      state.washingMachineData = action.payload;
    },
    setHomeApplianceData: (state, action) => {
      state.homeAppliance = action.payload;
    },
    setCartProduct: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    deleteCartProduct: (state, action) => {
      const id = action.payload;
      let newCartProducts = state.cartProducts.filter((item) => item.id !== id);
      state.cartProducts = newCartProducts;
    },
  },
});

export const {
  setHomeApplianceData,
  setLaptopData,
  setMobileData,
  setTVData,
  setWashingMachineData,
  setAllProduct,
  setCartProduct,
  deleteCartProduct,
} = productSlice.actions;

export default productSlice.reducer;
