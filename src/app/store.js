import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/reducers/productSlice";
import { fakeStoreApi } from "../services/fakeStoreApi";

const store = configureStore({
  reducer: {
    product: productSlice,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  // buat middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

export default store;
