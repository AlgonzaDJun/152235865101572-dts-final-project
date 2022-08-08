import { createSlice } from "@reduxjs/toolkit";

let address = [
//   { address1: "", address2: "", city: "", state: "", zip: "", country: "" },
];

// createSlice
const checkoutSlice = createSlice({
  name: "address",
  initialState: address,
  reducers: {
    addAddress: (state, action) => {
      return [...state, action.payload];
    },
    addAddress2: (state, action) => {
      return [...state, { address2: action.payload }];
    },
    addCity: (state, action) => {
      return [...state, { city: action.payload }];
    },
    addState: (state, action) => {
      return [...state, { state: action.payload }];
    },
    addZip: (state, action) => {
      return [...state, { zip: action.payload }];
    },
    addCountry: (state, action) => {
      return [...state, { country: action.payload }];
    },
  },
});

export const {
  addAddress,
  addAddress2,
  addCity,
  addState,
  addZip,
  addCountry,
} = checkoutSlice.actions;

export const selectAddress = (state) => state.address;

export default checkoutSlice.reducer;
