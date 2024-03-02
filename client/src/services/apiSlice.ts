import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { handleLogout } from "../features/authSlice";
import { RootState } from "../store";

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

export const authAPISlice = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const newCarAPISlice = createApi({
  reducerPath: "newCarAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["NewCars"],
  endpoints: (builder) => ({}),
});
