import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slice/cart/cartSlice"
import modalReducer from "./slice/modal/modalSlice"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch