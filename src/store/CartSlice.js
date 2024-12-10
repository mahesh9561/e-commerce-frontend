import { createSlice } from "@reduxjs/toolkit";

const loadCartItemsFromLocalStorage = () => {
    try {
        const serializedCartItems = localStorage.getItem('cartItems');
        return serializedCartItems ? JSON.parse(serializedCartItems) : [];
    } catch (e) {
        return [];
    }
};

const saveCartItemsToLocalStorage = (cartItems) => {
    try {
        const serializedCartItems = JSON.stringify(cartItems);
        localStorage.setItem('cartItems', serializedCartItems);
    } catch (e) {
        // Handle errors, if needed
    }
};

const initialState = {
    cartItems: loadCartItemsFromLocalStorage(),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cartItems.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }
            saveCartItemsToLocalStorage(state.cartItems);  // Save after updating cart
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            saveCartItemsToLocalStorage(state.cartItems);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.cartItems.find(item => item.id === id);
            if (product) {
                product.quantity = quantity;
            }
            saveCartItemsToLocalStorage(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCartItemsToLocalStorage(state.cartItems);
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
