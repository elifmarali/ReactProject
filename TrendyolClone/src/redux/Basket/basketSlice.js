import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [
        {
            color: "Pink",
            coupons: [2, 4],
            id: 24,
            imageUrl: "https://dfcdn.defacto.com.tr/upload/bol-paca-kombini133920231139.jpg",
            name: "Cozy Knit Sweater",
            price: 139.99,
            quantity: 1,
            size: "S"
        },
        {
            color: "Pink",
            coupons: [2, 4],
            id: 24,
            imageUrl: "https://dfcdn.defacto.com.tr/upload/bol-paca-kombini133920231139.jpg",
            name: "Cozy Knit Sweater",
            price: 139.99,
            quantity: 1,
            size: "M"
        },
        {
            color: "Navy",
            coupons: [2],
            id: 29,
            imageUrl: "https://i.pinimg.com/564x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg",
            name: "Sporty Track Pants",
            price: 99.99,
            quantity: 1,
            size: "M"
        },
        {
            color: "Beige",
            coupons: [2, 4],
            id: 33,
            imageUrl: "https://cdn.ikea.com.tr/ozgur-icerik/kategori/dekoratif-aksesuarlar/dekoratif-aksesuarlar-iyi-fikirler-3.jpg",
            name: "Summer Sun Hat",
            price: 29.99,
            quantity: 1,
            size: "One Size"
        },
        {
            color: "Gray",
            coupons: [2, 4],
            id: 78,
            imageUrl: "https://cdn.evkur.com.tr/c/Product/thumbs/a2_f8p0ya_500.jpg",
            name: "Comfortable Memory Foam Pillow",
            price: 49.99,
            quantity: 1,
            size: "One Size"
        },
        {
            color: "Beige",
            coupons: [2, 4],
            id: 83,
            imageUrl: "https://cdn.evkur.com.tr/c/Product/thumbs/a2_f8p0ya_500.jpg",
            name: "Luxury Throw Blanket",
            price: 89.99,
            quantity: 1,
            size: "One Size"
        },
        {
            color: "Silver",
            coupons: [2, 4],
            id: 93,
            imageUrl: "https://media.wired.com/photos/643d7e61cdba28f045ac3f59/4:3/w_2136,h_1602,c_limit/macbook_sec_GettyImages-1368668740.jpg",
            name: "Portable Power Bank",
            price: 34.99,
            quantity: 1,
            size: "One Size"
        },
        {
            color: "Black",
            coupons: [4],
            id: 96,
            imageUrl: "https://media.wired.com/photos/643d7e61cdba28f045ac3f59/4:3/w_2136,h_1602,c_limit/macbook_sec_GettyImages-1368668740.jpg",
            name: "Wireless Charging Pad",
            price: 49.99,
            quantity: 1,
            size: "One Size"
        },
        {
            color: "Multicolor",
            coupons: [],
            id: 100,
            imageUrl: "https://images.squarespace-cdn.com/content/v1/644927389a1ab06f2f12a9fe/d2cef23b-98a3-4e23-9835-e24209de58f5/IMG_4073.jpg",
            name: "Gym Resistance Bands",
            price: 24.99,
            quantity: 1,
            size: "One Size"
        }
    ],
    quantity: 0,
    total: 0, // Toplam tutar
    discountValue: 0,//indirim tutarı
    discount: 0, //indirim yapılan ürün adeti
    discountAmount: 0 // indirimsiz tutar
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddProduct: (state, action) => {
            let existingProduct = state.basket.find(product =>
                product.id === action.payload.id &&
                product.size === action.payload.size &&
                product.color === action.payload.color
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
                state.quantity += 1;
                state.discountAmount += existingProduct.price;
                state.total += existingProduct.coupons.includes(2) ? existingProduct.price - 20 : existingProduct.price;
                if (existingProduct.coupons.includes(2)) {
                    state.discountValue += 20;
                    state.discount += 1;
                }

            } else {
                // Sepette aynı ID'ye sahip ancak farklı renk veya bedende bir ürün varsa yeni ürün ekle
                state.basket.push({ ...action.payload, quantity: 1 });
                state.quantity += 1;
                state.discountAmount += action.payload.price;
                state.total += action.payload.coupons.includes(2) ? action.payload.price - 20 : action.payload.price;
                if (action.payload.coupons.includes(2)) {
                    state.discountValue += 20;
                    state.discount += 1;
                }
            }
        },
        deleteBasket: (state, action) => {
            let index = state.basket.findIndex(basketItem =>
                basketItem.id === action.payload.id &&
                basketItem.size === action.payload.size &&
                basketItem.color === action.payload.color
            );

            if (index !== -1) {
                let product = state.basket[index];
                state.quantity -= product.quantity;
                state.discountAmount -= product.price * product.quantity;
                state.total -= product.coupons.includes(2) ? (product.price - 20) * product.quantity : product.price * product.quantity;
                state.basket.splice(index, 1);
                if (product.coupons.includes(2)) {
                    state.discountValue -= 20 * product.quantity;
                    state.discount -= product.quantity;
                }
            }
        },
        quantityAndTotalCalculate: (state) => {
            let totalQuantity = 0, total = 0, discountAmount = 0;
            state.basket.forEach((product) => {
                totalQuantity += product.quantity;
                discountAmount += product.quantity * product.price;
                if (product.coupons.includes(2)) {
                    total += (product.price - 20) * product.quantity;
                    state.discountValue += product.quantity * 20;
                    state.discount += product.quantity;
                } else {
                    total += product.price * product.quantity;
                }
            });
            state.quantity = totalQuantity;
            state.total = total;
            state.discountAmount = discountAmount;
        },
    },
    extraReducers: (builder) => {

    }
})

export const { basketAddProduct, deleteBasket, quantityAndTotalCalculate } = basketSlice.actions;
export default basketSlice.reducer;
