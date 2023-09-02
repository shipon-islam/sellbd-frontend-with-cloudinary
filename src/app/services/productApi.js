import { SplitApi } from "./apiSlice";

const extendedApi = SplitApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (query) => `products?${query}`,
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (endURL) => `product/${endURL}`,
    }),
    addProduct: build.mutation({
      query: (formdata) => ({
        url: "product",
        method: "POST",
        body: formdata,
      }),
    }),
    updateProductById: build.mutation({
      query: ({ _id, formdata }) => {
        return {
          url: `product/${_id}`,
          method: "PUT",
          body: formdata,
        };
      },
    }),
    deleteProduct: build.mutation({
      query: (_id) => ({
        url: `product/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductByIdMutation,
  useDeleteProductMutation,
} = extendedApi;
