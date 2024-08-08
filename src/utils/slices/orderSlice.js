import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: []
    },
    reducers: {
        addOrder: (state, action) => {
            function generateUniqueId() {
                return Date.now().toString(36) + Math.random();
            }
            state.orders.push({ orderId: generateUniqueId(), orderedAmount: action.payload.price, orderedItems: action.payload.items })
        }
    }
})

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;