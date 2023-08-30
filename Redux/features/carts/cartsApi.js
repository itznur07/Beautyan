import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    /** addcarts endpoint */
    addCarts: builder.mutation({
      query: (data) => ({
        url: "carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Carts"],
    }),

    getCarts: builder.query({
      query: () => ({
        url: "carts",
      }),
      providesTags: ["Carts"],
    }),

    deleteCart: builder.mutation({
      query: (_id) => ({
        url: `carts/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Carts",
        { type: "Cart", id: arg },
      ],
    }),
  }),
});

export const { useAddCartsMutation, useGetCartsQuery, useDeleteCartMutation } =
  cartsApi;
