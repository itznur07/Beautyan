import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    /** endpoint for get products */
    products: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
  }),
});

export const { useProductsQuery } = productsApi;
