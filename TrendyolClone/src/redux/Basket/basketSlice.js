import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    basket: [],
    quantity: 0,
    total: 0,
    discountValue: 0,//indirim tutarı
    discount: 0, //indirim yapılan ürün adeti
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddProduct: (state, action) => {
            action.payload.coupons.map((coupon) => {
                if (coupon === 2) {
                    state.total -= 20;
                    state.discountValue += 20;
                    state.discount += 1;
                }
            })
            let existingProduct = state.basket.find(product =>
                product.id === action.payload.id &&
                product.size === action.payload.size &&
                product.color === action.payload.color
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
                state.quantity += 1;
                state.total += existingProduct.price;

            } else {
                // Sepette aynı ID'ye sahip ancak farklı renk veya bedende bir ürün varsa yeni ürün ekle
                state.basket.push({ ...action.payload, quantity: 1 });
                state.quantity += 1;
                state.total += action.payload.price;
            }

        }
    },
    extraReducers: (builder) => {

    }
})

export const { basketAddProduct } = basketSlice.actions;
export default basketSlice.reducer;
