import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../services/authAPI";
import { obtainToken } from "../utils/help";

interface ISliceState {
  state: "loading" | "finished";
  accessToken: string;
  showLoginModal: boolean;
}

const initialState: ISliceState = {
  state: "loading",
  accessToken: obtainToken,
  showLoginModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleShowLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    handleLogout: (state) => {
      localStorage.removeItem("accessToken");
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", payload?.accessToken);
        state.accessToken = payload?.accessToken;
        state.showLoginModal = false;
      }
    );
  },
});

export const { handleShowLoginModal, handleLogout } = authSlice.actions;

export default authSlice.reducer;
