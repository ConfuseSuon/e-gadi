import { createSlice } from "@reduxjs/toolkit";

interface IbreadCumb {
  title: string;
}

interface IGlobalSlice {
  breadCumbs: IbreadCumb[];
}

const initialState: IGlobalSlice = {
  breadCumbs: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    handleBreadCumbs: (state, { payload }) => {
      state.breadCumbs = payload;
      console.log(payload, "hello");
    },
  },
});

export const { handleBreadCumbs } = globalSlice.actions;

export default globalSlice.reducer;
