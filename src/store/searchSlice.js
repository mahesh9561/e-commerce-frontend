// export const searchProducts = createAsyncThunk('products/searchProducts', async (query) => {
//     const response = await fetch(`${BASE_URL}products/search?q=${query}`);
//     const data = await response.json();
//     return data.products;
// });

// const ProductSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.productStatus = STATUS.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.productStatus = STATUS.SUCCESS;
//                 state.products = action.payload;
//             })
//             .addCase(fetchProducts.rejected, (state) => {
//                 state.productStatus = STATUS.FAILED;
//             })
//             // Handle search products
//             .addCase(searchProducts.pending, (state) => {
//                 state.productStatus = STATUS.LOADING;
//             })
//             .addCase(searchProducts.fulfilled, (state, action) => {
//                 state.productStatus = STATUS.SUCCESS;
//                 state.products = action.payload;
//             })
//             .addCase(searchProducts.rejected, (state) => {
//                 state.productStatus = STATUS.FAILED;
//             });
//     }
// });
