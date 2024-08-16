import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionsList } from "./questionApi";

export const getQuestList = createAsyncThunk(
  "question/list",
  async (category, { rejectWithValue }) => {
    console.log(1);
    try {
      const data = await getQuestionsList(category);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
