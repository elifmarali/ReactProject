import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Card/cardSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})
console.log(cartSlice);