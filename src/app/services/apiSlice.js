import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sellbdapi.cyclic.app/api/",
    prepareHeaders: (headers, { getState }) => {
      const user = window.localStorage.getItem("user")
        ? JSON.parse(window.localStorage.getItem("user"))
        : null;

      if (user) {
        headers.set("authorization", `Bearer ${user.token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Product", "User", "Order"],
  endpoints: () => ({}),
});
