import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = "http://localhost:3000/products";
export let getProductList = createAsyncThunk(
    "getProductList", async () => {
        const response = await axios.get(API_URL)
        return response.data;
    }
)

export let favoriteClick = createAsyncThunk("favoriteClick",
    async (id, { getState, dispatch }) => {
        dispatch(getProductList())
        const state = getState();
        let currentProduct = state.product.productList.find(product => product.id === id);
        if (currentProduct === undefined) {
            currentProduct = state.product.productDetail;
        }
        const currentProductFavorite = currentProduct.favorite;

        const response = await axios.patch(`${API_URL}/${id}`, {
            ...currentProduct,
            favorite: !currentProductFavorite
        });

        return response.data
    }
)

export let getCategorFilterProductList = createAsyncThunk("getCategorFilterProductList",
    async (category) => {
        const response = await axios.get(API_URL);
        const categoryList = response.data.filter((product) =>
            product.category === category
        )
        return categoryList;
    })

export let getProductDetails = createAsyncThunk(
    "getProductDetails",
    async (productID) => {
        const response = await axios.get(`${API_URL}/${productID}`)
        return response.data;
    }
)

const initialState = {
    productList: [],
    productStatus: null,
    categoryList: [],
    popularList: [],
    flashList: [],
    bestSellingList: [],
    categoryProducts: [],
    categoryStatus: null,
    productDetail: null,
    productDetailStatus: null,
    favoriteList: [],
    searchList: [],
    search: false
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
            state.flashList = [];
            state.categoryProducts = [];
            state.categoryStatus = null;
            state.productDetail = null;
            state.productDetailStatus = null;
            state.searchList = [];
            state.search = false;
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
        },
        getFavoriteList: (state) => {
            if (state.productStatus === 'success') {
                state.favoriteList = state.productList.filter((product) => product.favorite === true)
            }
        },
        searchProduct: (state, action) => {
            console.log("calisti");
            let searchTerm = action.payload?.trim() || "";
            if (searchTerm) {
                state.search = true;
                state.searchList = state.productList.filter((product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else {
                state.search = false;
                state.searchList = [];
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
                state.categoryProducts = action.payload;
                state.categoryStatus = "success"
            }))
            .addCase(getCategorFilterProductList.pending, ((state) => {
                state.categoryStatus = "loading"
            }))
            .addCase(getCategorFilterProductList.rejected, ((state) => {
                state.categoryStatus = "error";
            }))
            .addCase(getProductDetails.fulfilled, ((state, action) => {
                state.productDetailStatus = "success";
                state.productDetail = action.payload;
            }))
            .addCase(getProductDetails.pending, ((state) => {
                state.productDetailStatus = "loading";
            }))
            .addCase(getProductDetails.rejected, ((state) => {
                state.productDetailStatus = "error";
            }))
    }
})

export default productSlice.reducer;
export const { getCategoryList, getEnCokEklenenlerList, resetProductList, getFlashList, getBestSellingList, getFavoriteList, searchProduct } = productSlice.actions;
