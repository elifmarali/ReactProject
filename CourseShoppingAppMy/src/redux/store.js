import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./Slices/CourseSlice";
export const store = configureStore({
    reducer: {
        course: CourseReducer
    }
})