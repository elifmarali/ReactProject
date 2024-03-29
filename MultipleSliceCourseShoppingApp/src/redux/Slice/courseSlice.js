import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const courseSlice = createSlice({
    name: "course",
    initialState: {
        data: [],
        searchFields: ""
    },
    reducers: {
        addItem: (state, action) => {
            state.data.push({ name: action.payload.name, description: action.payload.description, cost: action.payload.cost, id: nanoid() })
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter((course) => course.id !== action.payload)
        },
        changeSearch: (state, action) => {
            state.searchFields = action.payload
        }
    }
})

export const { addItem, deleteItem, changeSearch } = courseSlice.actions;
export const courseReducer = courseSlice.reducer