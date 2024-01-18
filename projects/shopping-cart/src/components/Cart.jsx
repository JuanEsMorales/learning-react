import { CartIcon, ClearCartIcon } from "./Icons"
import { useId } from "react"
import './Cart.css'

export function Cart() {
  const cartChexboxId = useId()

  return (
    <>
      <label htmlFor={cartChexboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' name='' id={cartChexboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
              alt='iPhone 9'
            />
            <div>
              <strong>Iphone 9</strong> - $549
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
