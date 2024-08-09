import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products";

const initialState = {
    products: [],
    items: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload.map((el) => ({
                id: el.idCategory,
                category: el.strCategory,
                image: el.strCategoryThumb,
                items: []
            }))
        },
        addItems: (state, action,) => {
            const { items, categoryIndex } = action.payload;
            const categories = state.products.find(el => el.id == categoryIndex)

            let data = items.map((el) => ({
                id: el.idMeal,
                name: el.strMeal,
                price: Math.floor(Math.random() * 500) + 1,
                image: el.strMealThumb,
            }))
            if(categories){
                state.products.find(el => el.id == categoryIndex).items = data;
            }
        }
    }
});

export const { addProducts, addItems } = productsSlice.actions;
export default productsSlice.reducer;