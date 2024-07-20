import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import clothesList from "../../api";

const getClothingList = () => {
    const categories = [];
    clothesList.forEach((clothesItem) => {
        if (!categories.includes(clothesItem.category)) {
            categories.push(clothesItem.category);
        }
    }
    )
    return categories;
}
const initialState = {
    categoryList: getClothingList(),
    quantity: 0,
    cardList: clothesList,
    total: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {}
})


export default cartSlice.reducer;