import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    /** endpoint for get products */
    products: builder.query({
      query: () => ({
        url: "products",
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg },
      ],
    }),
    /** endpoint for get single product */
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
  }),
});

export const { useProductsQuery, useGetProductQuery } = productsApi;
