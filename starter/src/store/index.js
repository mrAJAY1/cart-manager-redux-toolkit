import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalRecuer from "../features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalRecuer,
  },
});

export default store;
