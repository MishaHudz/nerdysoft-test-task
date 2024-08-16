import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesList } from "./categoriesOperation";

const initialState = {
  categoriesList: null,
  isLoading: false,
  errorMessage: null,
};

const categoriesSlice = createSlice({
  name: "categories",
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

export const categoriesReducer = categoriesSlice.reducer;
