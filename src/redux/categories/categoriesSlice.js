import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesList } from "./categoriesOperation";

const initialState = {
  categoriesList: null,
  isLoading: false,
  errorMessage: null,
};

const categoriesSlice = createSlice({
  name: "question",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.categoriesList = payload;
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
          state.error = "c";
        }
      );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
