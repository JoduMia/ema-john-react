import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Cart from './Cart';
import Shop from './Shop';


const getStordData = () => {
  const gotData = localStorage.getItem('carts');
  if(gotData){
    return JSON.parse(gotData)
  } else {
    return []
  }
};

export default function Shops() {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState(getStordData());
  const dataPass = (product) => {
    setCart([...carts,product])
  };

    useEffect(()=> {
      localStorage.setItem('carts', JSON.stringify(carts))
    })
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
          console.log(data);
            setProducts(data)
        })
    },[])
  return (
    <div className='grid grid-cols-5 pt-[80px] -z-10'>
        <div className='col-span-4 grid grid-cols-3 px-12 gap-6 pt-12'>
        {products.map(product => <Shop dataPass={dataPass} key={product.id} product={product} {...product}/>)}
        </div>
          <Cart cart={carts}/>
    </div>
  )
}
