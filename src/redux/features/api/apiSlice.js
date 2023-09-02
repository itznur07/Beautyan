import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://beautyan-server.vercel.app/",
  }),
  tagTypes: ["Products", "Product", "Carts", "Cart"],
  endpoints: (builder) => ({}),
});
