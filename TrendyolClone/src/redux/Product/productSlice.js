import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProductList = createAsyncThunk(
    "getProductList", async () => {
        const response = await axios.get("http://localhost:3000/products")
        return response.data;
    }
)

export let favoriteClick = createAsyncThunk("favoriteClick",
    async (id, { getState }) => {
        const state = getState()
        const currentProduct = state.product.productList.find(product => product.id === id);
        const currentProductFavorite = currentProduct.favorite;

        const response = await axios.patch(`http://localhost:3000/products/${id}`, {
            ...currentProduct,
            favorite: !currentProductFavorite
        });

        return response.data
    }
)

export let getCategorFilterProductList = createAsyncThunk("getCategorFilterProductList",
    async (category) => {
        const response = await axios.get(`http://localhost:3000/products`);
        const categoryList = response.data.filter((product) =>
            product.category === category
        )
        return categoryList;
    })

const initialState = {
    productList: [],
    productStatus: null,
    categoryList: [],
    popularList: [],
    flashList: [],
    bestSellingList: [],
    categoryProducts: [],
    categoryStatus: null
}
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        resetProductList: (state) => {
            state.productList = []; // Ürün listesini sıfırla
            state.productStatus = null; // Durumu sıfırla
            state.categoryList = []; // Kategori listesini sıfırla
            state.popularList = []; // Popüler listeyi sıfırla
            state.bestSellingList = [];
            state.flashList = []
        },
        getCategoryList: (state) => {
            if (state.productStatus === 'success') {
                state.productList.forEach((prodoctItem) => {
                    if (!(state.categoryList.includes(prodoctItem.category))) {
                        state.categoryList.push(prodoctItem.category);
                    }
                })
            }
        },
        getEnCokEklenenlerList: (state) => {
            if (state.productStatus === 'success') {
                state.productList.forEach((product) => {
                    product.tags.forEach((tag) => {
                        if (tag.toLowerCase().includes("en çok eklenenler")) {
                            state.popularList.push(product);
                        }
                    });
                });
            }
        },

        getFlashList: (state) => {
            if (state.productStatus === 'success') {
                state.productList.forEach((product) => {
                    product.tags.forEach((tag) => {
                        if (tag.toLowerCase().includes("flaş ürünler")) {
                            state.flashList.push(product);
                        }
                    })
                })
            }
        },
        getBestSellingList: (state) => {
            if (state.productStatus === 'success') {
                state.productList.forEach((product) => {
                    product.tags.forEach((tag) => {
                        if (tag.toLowerCase().includes("en çok öne çıkanlar")) {
                            state.bestSellingList.push(product)
                        }
                    })
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
            .addCase(getCategorFilterProductList.fulfilled, ((state, action) => {
                console.log(action.payload);
                state.categoryProducts = action.payload;
                state.categoryStatus = "success"
            }))
            .addCase(getCategorFilterProductList.pending, ((state, action) => {
                state.categoryStatus = "loading"
            }))
            .addCase(getCategorFilterProductList.rejected, ((state, action) => {
                state.categoryStatus = "error";
            }))
    }
})

export default productSlice.reducer;
export const { getCategoryList, getEnCokEklenenlerList, resetProductList, getFlashList, getBestSellingList } = productSlice.actions;
