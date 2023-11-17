"use client"
import { increase, removeItem, decrease } from "@/redux/slice/cart/cartSlice"
import { ChevronDown, ChevronUp } from "@/icons"
import { useDispatch } from "react-redux"
import { CardItems } from "@/redux/slice/cart/cartSlice"
import Image from "next/image"

const CartItem = ({ id, title, price, img, amount }: CardItems) => {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <div style={{ position: "relative", width: "100px", height: "100px" }}>
        <Image src={img} alt={title} fill />
      </div>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 0) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease({ id }))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
