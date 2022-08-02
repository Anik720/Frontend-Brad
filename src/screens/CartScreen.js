import React from 'react'
import { useLocation } from 'react-router-dom';
const CartScreen = ({}) => {
const location=useLocation()
  const qty=location.search
    console.log("hello",qty)
  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen
