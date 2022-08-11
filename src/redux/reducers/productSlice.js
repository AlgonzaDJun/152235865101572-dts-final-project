import { createSlice } from "@reduxjs/toolkit";

let addItem = [];

const productSlice = createSlice({
  name: "product",
  initialState: addItem,
  reducers: {
    addProduct: (state, action) => {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    removeProduct: (state, action) => {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist.quantity === 1) {
        return state.filter((item) => item.id !== exist.id);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    // return empty array when cart is empty
    emptyCart: (state) => {
      return [...state = []];
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
