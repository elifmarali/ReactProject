import { configureStore } from "@reduxjs/toolkit"
import { formReducer } from "./Slice/formSlice"
import { courseReducer } from "./Slice/courseSlice"
export const store = configureStore({
    reducer: {
        form: formReducer,
        course: courseReducer
    }
})