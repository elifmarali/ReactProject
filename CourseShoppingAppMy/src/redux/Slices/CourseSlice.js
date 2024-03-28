import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../../courseItems"
const initialState = {
    courseList: courseItems,
    quantity: 0,
    totals: 0
}
export const CourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        cleareList: (state) => {
            state.courseList = []
        },
        deleteCourseItem: (state, action) => {
            state.courseList = state.courseList.filter((course) => course.id !== action.payload)
            console.log(state.courseList);
        },
        increase: (state, action) => {
            const courseIncreaseElement = state.courseList.find((item) => item.id === action.payload)
            courseIncreaseElement.quantity++;
        },
        decrease: (state, action) => {
            const courseDecreaseElement = state.courseList.find((item) => item.id === action.payload)
            if (courseDecreaseElement.quantity > 0) {
                courseDecreaseElement.quantity--;
            }
        },
        total: (state) => {
            let totals = 0;
            let quantity = 0
            state.courseList.forEach((item) => {
                quantity += item.quantity;
                totals += item.quantity * item.price
            })
            state.totals = totals;
            state.quantity = quantity;
        }

    }
})

export const { cleareList, deleteCourseItem, increase, decrease, total } = CourseSlice.actions;
export default CourseSlice.reducer;