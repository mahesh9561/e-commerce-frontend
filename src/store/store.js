import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './CategorySlice';
import productReducer from './ProductsSlice';
import cartReducer from './CartSlice';
import registerReducer from './RegisterSlice';


const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        register: registerReducer,
    }
});

export default store;
