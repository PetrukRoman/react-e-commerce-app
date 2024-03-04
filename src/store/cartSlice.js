import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.subTotal = 0;
    },
    addToCart: (state, action) => {
      const currentItem = action.payload;
      const searchIndex = state.items.findIndex((item) => item.id === currentItem.id);

      if (searchIndex === -1) {
        state.items.push({
          ...currentItem,
          quantity: 1,
        });
      } else {
        if (state.items[searchIndex].quantity === 10) return;
        state.items[searchIndex].quantity++;
      }

      state.subTotal = state.items.reduce((acc, curr) => {
        return (acc += curr.currentPrice * curr.quantity);
      }, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.subTotal = state.items.reduce((acc, curr) => {
        return (acc += curr.currentPrice * curr.quantity);
      }, 0);
    },
    changeQuantity: (state, action) => {
      const currentItemId = action.payload.id;
      const userQuantity = action.payload.quantity;

      const searchIndex = state.items.findIndex((item) => item.id === currentItemId);

      state.items[searchIndex].quantity = userQuantity;
      state.subTotal = state.items.reduce((acc, curr) => {
        return (acc += curr.currentPrice * curr.quantity);
      }, 0);
    },
  },
});

export const { resetCart, addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
