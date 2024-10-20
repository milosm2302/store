import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils/Index'

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal} = useSelector((state)=>state.cartState)

  return (
    <div className="card bg-base-200">
    <div className="card-body">

{/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
            <span>Subtotal</span>
            <span >{formatPrice(cartTotal)}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
            <span>Shipping</span>
            <span >{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
            <span>Subtotal</span>
            <span >{formatPrice(tax)}</span>
        </p>
        {/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b mt-4 pb-2">
            <span>Order Total</span>
            <span >{formatPrice(orderTotal)}</span>
        </p>
        </div>
  </div>
  )
}

export default CartTotals
