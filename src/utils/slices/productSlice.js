import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: products
    },
    reducers: {}
});

export default productsSlice.reducer;