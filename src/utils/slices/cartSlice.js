import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (state.items[index].quantity > 1) {
                state.items[index].quantity -= 1;
            } else {
                state.items.splice(index, 1);
            }
        },
        clearCart: (state, action) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;