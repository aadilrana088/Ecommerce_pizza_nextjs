import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice"

export default configureStore({
    reducer: {
        cart: CartReducer
    }
})