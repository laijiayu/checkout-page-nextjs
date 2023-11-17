import CartItem from "./components/CartItem"
import { openModal } from "@/redux/slice/modal/modalSlice"
import { getCartItems } from "@/redux/slice/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "./hook"
import { CardItems } from "@/redux/slice/cart/cartSlice"
import { FaArrowRotateRight } from "react-icons/fa6"

const CartContainer = () => {
  const { cartItems, total, amount } = useAppSelector((store) => store.cart)
  const dispatch = useAppDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>My bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <div className="empty-btn">
            <button
              className="btn rotate-btn"
              onClick={() => {
                dispatch(getCartItems())
              }}
            >
              <FaArrowRotateRight />
            </button>
          </div>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>My bag</h2>
      </header>
      <div>
        {cartItems.map((item: CardItems) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal())
          }}
        >
          clear cart
        </button>
        <br />
        <button
          className="btn rotate-btn"
          onClick={() => {
            dispatch(getCartItems())
          }}
        >
          <FaArrowRotateRight />
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
