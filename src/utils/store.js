import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './slices/productSlice.js'
import cartSlice from "./slices/cartSlice.js";
import ordersSlice from "./slices/orderSlice.js";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        orders: ordersSlice
    }
});

export default store;