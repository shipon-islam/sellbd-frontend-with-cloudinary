import { SplitApi } from "./apiSlice";

const extendedApi = SplitApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderList: build.query({
      query: () => "payment/get",
      providesTags: ["Order"],
    }),
    getAllOrderList: build.query({
      query: () => "payment/get/all",
      providesTags: ["Order"],
    }),
    getOrderById: build.query({
      query: (_id) => `payment/get/${_id}`,
      providesTags: ["Order"],
    }),

    createPayment: build.mutation({
      query: (data) => ({
        url: "payment/create",
        method: "POST",
        body: data,
      }),
    }),
    orderUpdate: build.mutation({
      query: ({ _id, status }) => ({
        url: `order/update/${_id}`,
        method: "PUT",
        body: { status: status },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreatePaymentMutation,
  useGetAllOrderListQuery,
  useGetOrderByIdQuery,
  useGetOrderListQuery,
  useOrderUpdateMutation,
} = extendedApi;
