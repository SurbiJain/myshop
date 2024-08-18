import React from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { removeFromCart, increment, clearCart, clearItem } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => {
    return state.cart;
  });
  const subTotal = useSelector((state) => {
    return state.cart.subTotal;
  });

  const cartQuantity = cart?.length;

  return (
    <section class="bg-white p-6 main md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900e sm:text-2xl">Shopping Cart</h2>
  
      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
          {cartQuantity === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          cart.map((item) => {
            return (<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-smmd:p-6" key={item.itemCode}>
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <img class="h-20 w-20 " src={item.img} alt="imac image" />
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                
                <FaCirclePlus
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center mr-2"
                        onClick={() => {
                          dispatch(increment(item.itemCode));
                        }}
                      />{" "}
                      <span className="">Quantity: {item.quantity}</span>{" "}
                      <FaCircleMinus
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center ml-2"
                        onClick={() => {
                          dispatch(removeFromCart(item.itemCode));
                        }}
                      />
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 ">${item.price}</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline">{item.title}</a>

                <div class="flex items-center gap-4">
                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline " onClick={()=>{dispatch(clearItem(item.itemCode))}}>
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>)



          }))}
           
            
          </div>
         
        </div>
  
        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-smsm:p-6">
            <p class="text-xl font-semibold text-gray-900 ">Order summary</p>
  
            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 ">Original price</dt>
                  <dd class="text-base font-medium text-gray-900 ">${subTotal}</dd>
                </dl>
  
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 ">Savings(10% Off)</dt>
                  <dd class="text-base font-medium text-green-600">-${(0.1*subTotal).toFixed(2)}</dd>
                </dl>
  
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal">Shipping </dt>
                  <dd class="text-base font-medium text-gray-900 ">$50</dd>
                </dl>
              </div>
  
              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                <dt class="text-base font-bold text-gray-900 ">Total</dt>
                <dd class="text-base font-bold text-gray-900 ">${(subTotal + (-0.1*subTotal) + 50)}</dd>
              </dl>
            </div>
  
            <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 ">Proceed to Checkout</a>
  
            <div class="flex items-center justify-center gap-2">
            <Link href={"/checkout"}>
                  <button className="flex mx-auto bg-slate-200 border-0 py-2 px-2 focus:outline-none hover:bg-slate-600 rounded text-sm">
                    Pay Now
                  </button>
                </Link> 
              <span class="text-sm font-normal text-gray-500 "> or </span>
              <Link href="/tshirts" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline ">
                Continue Shopping
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cart