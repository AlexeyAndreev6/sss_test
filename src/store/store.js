import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});
