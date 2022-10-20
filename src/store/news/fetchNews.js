import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const baseUrl =
    "https://unified-api.capital-system.com/news/main?offset=0&limit=10";
  const headers = {
    'Accept': "application/json",
    'Authorization': "Bearer H4TNnYslx082e1KpHZJkpgzPzAVSNYEu",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "instance-token": "beOYHnJwB7mjZ94NJo4lmu-yM1PEcUY5",
  };

  return await axios.get(baseUrl, { headers }).then((res) => {
    return new Array(res.data).map((news, i) => {
      news.key = i;
      console.log(news);
      return news;
    });
  });
});
