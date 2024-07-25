import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Product/productSlice";
import basketSlice from "./Basket/basketSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        basket: basketSlice
    }
})