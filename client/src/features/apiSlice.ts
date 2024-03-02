import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { handleLogout } from "./authSlice";

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (header, { getState }) => {
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken) header.set("x-auth-token", accessToken);
    return header;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result, "res");
  if (result.error && result.error.status === 401) {
    api.dispatch(handleLogout());
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiV",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
