import { showMessage } from "../utils/help";
import apiSlice from "./apiSlice";

export const userAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, any>({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
      transformResponse: (resp: any) => {
        showMessage("success", resp?.message);
        return resp;
      },
      transformErrorResponse(baseQueryReturnValue: any) {
        console.log(baseQueryReturnValue, "bbb");
        showMessage("error", baseQueryReturnValue?.data?.message);
        return baseQueryReturnValue?.data;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation } = userAPI;
