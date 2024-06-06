import React, { useState } from 'react'
import CardDetail from './CardDetail';
import { X } from 'lucide-react';

const Card = ({title,url,desc,info}) => {
  const [detail,setDetail]=useState(false);
  const handleClick=()=>{
    setDetail(true);
  }

  const hancleClose=()=>{
    setDetail(false);
  }
  return (
    <>
    <div onClick={handleClick} className='w-[70%] h-[25%] cursor-pointer ml-[22rem]  flex border-[0.2rem] text-white border-gray-300 p-[1rem] rounded-lg mb-[3rem]'>
      <img className='mr-[2rem] h-[15rem]' src={url} alt="" />
      <div>
        <h2 className='text-[2rem] font-bold'>{title}</h2>
        <p className='text-[1.4rem] mt-[1rem]'>{desc}</p>
      </div>
    </div>
    {detail && <div>
      <X size={30} color="black" onClick={hancleClose} className='z-50 absolute left-[72%] top-[32%] cursor-pointer'/>
    <CardDetail
    title={title}
    info = {info}
    />
    </div>}
    </>
    
  )
}

export default Card
