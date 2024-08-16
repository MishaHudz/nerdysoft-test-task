import { createSlice } from "@reduxjs/toolkit";
import { getQuestList } from "./questionOperation";

const initialState = {
  questionList: null,
  answerList: [],
  isLoading: false,
  errorMessage: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addAnswer: (state, { payload }) => {
      state.answerList = [...state.answerList, payload];
    },
    clearLists: (state) => {
      state.answerList = [];
      state.questionList = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.questionList = payload;
        state.answerList = [];
      })
      .addMatcher(
        (action) => {
          return action.type.endsWith("/pending");
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/rejected");
        },
        (state, { payload }) => {
          state.isLoading = false;
          // state.error = payload.message;
          state.errorMessage = payload;
          console.log(payload);
        }
      );
  },
});

export const questionReducer = questionSlice.reducer;
export const { addAnswer, clearLists } = questionSlice.actions;
