import { createContext, useState } from "react";

export const cartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const addTocart = product => {}
}