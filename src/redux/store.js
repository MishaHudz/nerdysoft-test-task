import { configureStore } from "@reduxjs/toolkit";

import { questionReducer } from "./questions/questionSlice";
import { categoriesReducer } from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    categories: categoriesReducer,
  },
});
