'use client'

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

type CardItems = { id: string, title: string, price: string, img: string, amount: number }

type State = {
    cartItems: CardItems[];
    amount: number;
    total: number;
    isLoading: boolean;
}


const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
}

type Response = {
    id: String,
    title: 'google pixel',
    price: '499.99',
    img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
    amount: 1,
}

const url = "https://course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk("cart/getrCartItems", async (name, thunkAPI) => {
    try {
        const getData = await axios.get(url)
        return getData.data
    } catch (error) {
        return thunkAPI.rejectWithValue("something wrong")
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state: State, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state: State, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)

            if (cartItem) {
                cartItem.amount = cartItem.amount + 1
            }


        },
        decrease: (state: State, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)

            if (cartItem)
                cartItem.amount = cartItem.amount - 1

        },
        // const item:{id:string} = {id: 'dfjvijo'}
        calculateTotals: (state: State) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += Number(item.price) * item.amount
            })
            state.amount = amount
            state.total = total
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.cartItems = action.payload
            })
            .addCase(getCartItems.rejected, (state, action) => {
                console.log(action)
                state.isLoading = false
            })
    },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer
