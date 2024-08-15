import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionsList } from "./questionApi";

export const getQuestList = createAsyncThunk(
  "question/list",
  async (category, difficulty, { rejectWithValue }) => {
    console.log(1);
    try {
      const data = await getQuestionsList(category, difficulty);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
