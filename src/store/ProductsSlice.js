import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
    products: [],
    singleProduct: [],
    productStatus: STATUS.IDLE,
    singleProductStatus: STATUS.IDLE
};
// export const fetchSingleProducts = createAsyncThunk('Single_products/fetchApi', async (id) => {
//     const response = await fetch(`${BASE_URL}products/${id}`);
//     const data = await response.json();
//     console.log(data)
//     return data;
// });

// export const fetchSingleProducts = createAsyncThunk('Single_products/fetchApi', async (id) => {
//     const response = await fetch(`${BASE_URL}products/${id}`);
//     const data = await response.json();
//     // console.log(data)
//     return data;
// });


export const fetchSingleProducts = createAsyncThunk('Single_products/fetchApi', async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    // console.log("Fetched product: ", data);  // Log the fetched data
    console.log(data)
    return data;
});




export const fetchProducts = createAsyncThunk('products/fetchApi', async (limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    // console.log(data.products);
    return data.products;
});
export const searchProducts = createAsyncThunk('products/searchProducts', async (query) => {
    const response = await fetch(`${BASE_URL}products/search?q=${query}`);
    const data = await response.json();
    return data.products;
});

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchProducts.pending, (state) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productStatus = STATUS.FAILED;
            })
            // Handle fetching single product
            .addCase(fetchSingleProducts.pending, (state) => {
                state.singleProductStatus = STATUS.LOADING;
            })
            .addCase(fetchSingleProducts.fulfilled, (state, action) => {
                state.singleProductStatus = STATUS.SUCCESS;
                state.singleProduct = action.payload; // Update singleProduct with the fetched product data
            })
            .addCase(fetchSingleProducts.rejected, (state) => {
                state.singleProductStatus = STATUS.FAILED;
            })
            // Handle search products
            .addCase(searchProducts.pending, (state) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(searchProducts.rejected, (state) => {
                state.productStatus = STATUS.FAILED;
            });
    }
});


export const getAllProducts = (state) => state.product.products;
export const getSingleProduct = (state) => state.product.singleProduct;
export default ProductSlice.reducer;
