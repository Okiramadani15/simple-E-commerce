import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
});
