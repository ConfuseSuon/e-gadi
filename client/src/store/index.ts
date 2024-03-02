import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "../features/authSlice";
import globalSlice from "../features/globalSlice";
import { authAPISlice, newCarAPISlice } from "../services/apiSlice";

// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    global: globalSlice,
    [authAPISlice.reducerPath]: authAPISlice.reducer,
    [newCarAPISlice.reducerPath]: newCarAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authAPISlice.middleware,
      newCarAPISlice.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
