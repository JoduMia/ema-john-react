import React from 'react';
import logo from '../../images/Logo.svg';

export default function Header() {
  return (
    <div className='bg-[#1C2B35] fixed w-full z-50'>
        <nav className='container mx-auto flex items-center justify-between h-[80px] px-3'>
            <img src={logo} alt="" />
            <div className='text-white'>
                <a href="#order" className='text-[17px] ml-[32px] hover:text-red-500 duration-300 font-normal font-lato'>Order</a>

                <a href="#review" className='text-[17px] ml-[32px] hover:text-red-500 duration-300 font-normal font-lato'>Order review</a>

                <a href="#inventory" className='text-[17px] ml-[32px] hover:text-red-500 duration-300 font-normal font-lato'>Manage Inventory</a>

                <a href="#login" className='text-[17px] ml-[32px] hover:text-red-500 duration-300 font-normal font-lato'>Login</a>
            </div>
        </nav>
    </div>
  )
}
