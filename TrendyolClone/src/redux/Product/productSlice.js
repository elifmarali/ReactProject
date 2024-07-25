import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let getProductList = createAsyncThunk(
    "getProductList", async () => {
        const response = await axios.get("http://localhost:3000/products")
        return response.data;
    }
)


const initialState = {
    productList: [],
    productStatus: null,
    categoryList: []
}
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getCategoryList: (state) => {
            if (state.productStatus === 'success') {
                state.productList.map((prodoctItem) => {
                    if (!(state.categoryList.includes(prodoctItem.category))) {
                        state.categoryList.push(prodoctItem.category);
                    }
                })
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.fulfilled, ((state, action) => {
                state.productList = (action.payload)
                state.productStatus = "success"
            }))
            .addCase(getProductList.pending, ((state) => {
                state.productStatus = "loading"
            }))
            .addCase(getProductList.rejected, ((state) => {
                state.productStatus = "error";

            }))
    }
})

export default productSlice.reducer;
export const { getCategoryList } = productSlice.actions;