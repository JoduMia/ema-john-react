import React from 'react'

export default function Cart({cart}) {
  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.price;
  },0);



  return (
    <div className='bg-[#d293344d] p-3'>
      <div className='h-screen fixed'>
        <div>
          <h1 className='text-center text-xl pb-1 border-b-2 border-black uppercase font-bold'>Order Summary</h1>
          <div className='mt-3 space-y-3'>
            <h1>Selected Items: <span className='font-semibold'>{cart.length}</span></h1>

            <p>TotalPrice: ${totalPrice}</p>
            <p>Total Shipping cost: ${totalPrice * .1}</p>
            <p>Added Tax: $5</p>
            <p className='text-xl font-bold'>Grand Total: ${totalPrice + (totalPrice * .1) + 5}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
