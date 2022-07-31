import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "../services/fakeStoreApi";

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  // buat middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

export default store;
