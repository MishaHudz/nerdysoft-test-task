import { createSlice } from "@reduxjs/toolkit";
import { getQuestList } from "./questionOperation";

const initialState = {
  questionList: null,
  answerList: null,
  isLoading: false,
  errorMessage: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getQuestList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.questionList = payload;
      })
      .addMatcher(
        (action) => {
          return action.type.endsWith("/pending");
        },
        (state) => {
          state.isLoading = true;
          state.show = null;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/rejected");
        },
        (state, { payload }) => {
          state.isLoading = false;
          // state.error = payload.message;
          state.error = "q";
        }
      );
  },
});

export const questionReducer = questionSlice.reducer;
