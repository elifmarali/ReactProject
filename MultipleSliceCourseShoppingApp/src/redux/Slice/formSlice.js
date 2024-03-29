import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./courseSlice";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        description: "",
        cost: 0
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeDesc: (state, action) => {
            state.description = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = parseInt(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addItem, (state, action) => {
            state.name = "",
                state.description = "",
                state.cost = 0
        })
    }
})

export const { changeName, changeDesc, changeCost } = formSlice.actions

export const formReducer = formSlice.reducer