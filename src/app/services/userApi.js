import { SplitApi } from "./apiSlice";

const extendedApi = SplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthUser: build.query({
      query: () => "/user/get/me",
      providesTags: ["User"],
    }),

    registerUser: build.mutation({
      query: (data) => ({
        url: "user/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: build.mutation({
      query: (formdata) => ({
        url: "user/update",
        method: "PUT",
        body: formdata,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useGetAuthUserQuery,
} = extendedApi;
