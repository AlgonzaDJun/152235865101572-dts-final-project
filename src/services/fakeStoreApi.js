import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetByCategoryQuery } = fakeStoreApi;
