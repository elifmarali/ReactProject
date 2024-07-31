import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    quantity: 0,
    total: 0
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddProduct: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: (builder) => {

    }
})

export const { basketAddProduct } = basketSlice.actions;
export default basketSlice.reducer;
