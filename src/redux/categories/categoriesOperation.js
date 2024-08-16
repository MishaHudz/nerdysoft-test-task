import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCatList } from "./categoriesApi";

export const getCategoriesList = createAsyncThunk(
  "categories/list",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCatList();
      return data.trivia_categories;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.message);
    }
  }
);
