import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfItemsInCart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")).length
    : 0,
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.noOfItemsInCart += 1;
      console.log("action", action.payload);
      state.items.push(action.payload);
      console.log("state", state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.noOfItemsInCart -= 1;
      state.items = state.items.filter((item) => item !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
