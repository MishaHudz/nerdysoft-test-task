import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionsList } from "./questionApi";

export const getQuestList = createAsyncThunk(
  "question/list",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getQuestionsList(
        payload?.category,
        payload?.difficulty
      );

      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
