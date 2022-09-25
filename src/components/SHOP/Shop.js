import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

export default function Shop({product,dataPass,img, id, name,price,seller,ratings}) {

  return (
    <div className='border-2 rounded relative min-h-[490px]'>
        <div className='m-2 space-y-3'>
            <div className='max-h-[286px] max-w-[286px]'>
                <img src={img} alt="" className='rounded' />
            </div>
            <div className='mt-3'>
                <h1 className='text-lg text-[#0E161A] font-normal font-lato'>{name}</h1>
                <p>Price: ${price}</p>
            </div>
            <div className='text-[#2A414F]'>
                <h3 className='text-[14px]'>Manufacturer: {seller}</h3>
                <p className='text-[12px] '>Rating: {ratings} star</p>
            </div>
        </div>
        <button onClick={() => {dataPass(product)}} className='bg-[#f0a83c] w-full flex items-center justify-center gap-2 absolute bottom-0 hover:text-[#08121b] duration-300 hover:bg-[#efef20] py-2 font-medium text-lg'>Add to cart <FaShoppingCart /></button>
    </div>
  )
}
