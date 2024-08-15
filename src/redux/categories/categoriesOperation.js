import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCatList } from "./categoriesApi";

export const getCategoriesList = createAsyncThunk(
  "categories/list",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCatList();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
