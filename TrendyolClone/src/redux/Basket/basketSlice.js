import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    quantity: 0
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default basketSlice.reducer;
