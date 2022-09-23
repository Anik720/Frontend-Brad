import React from 'react'
import { useLocation } from 'react-router-dom';
const CartScreen = ({}) => {
const location=useLocation()
  const qty=location.search
  
  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen
