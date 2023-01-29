import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.quantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
});
export const cartActions = cartSlice.actions
export default cartSlice.reducer;