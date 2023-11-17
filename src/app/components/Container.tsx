"use client"

import { useEffect } from "react"
import CartContainer from "../CartContainer"
import Navbar from "./Navbar"
import Modal from "./Modal"
import { calculateTotals, getCartItems } from "@/redux/slice/cart/cartSlice"
import { useAppSelector, useAppDispatch } from "../hook"

function Container() {
  const { cartItems, isLoading } = useAppSelector((store) => store.cart)
  const { isOpen } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  useEffect(() => {
    console.log("hjkhjk")
    dispatch(getCartItems())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default Container
