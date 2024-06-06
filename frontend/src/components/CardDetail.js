import React from 'react'

const CardDetail = ({title,info}) => {
  return (
    <div className='w-[50%] h-[50%] bg-white z-40 absolute left-[25%] top-[30%] p-[2rem] rounded-md text-center'>
      <h1 className='text-[3rem] font-semibold  mt-[2rem]'>{title}</h1>
      <p className='mt-[5rem] text-[1.5rem] '>{info}</p>
    </div>
  )
}

export default CardDetail
