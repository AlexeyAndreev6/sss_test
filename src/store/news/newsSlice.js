import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./fetchNews";

const initialState = {
  news: [],
  status: "", //loading | idle
  errors: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
      state.errors = null;
    });

    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.news = payload;
      state.status = "idle";
    });

    builder.addCase(fetchNews.rejected, (state) => {
      state.status = "idle";
    });
  },
});

export default newsSlice.reducer;