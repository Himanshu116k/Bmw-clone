import React from 'react'

const Banner3 = (props) => {
  return (
    <div className='pt-[25px] h-[75vh] relative'>
        <img className='w-[100%] h-full object-cover' src={props.src} alt="" />
      <div className="h-[70%] w-[45%] absolute top-[12vh] left-[5vh] flex flex-col justify-center items-center gap-10">
        <h2 className='text-white text-[38px] font-extralight'>{props.h2}</h2>
        <p className='text-white text-[21px] font-extralight'>{props.p} </p>
        <button className='h-[52px] w-[244px] border-2 border-gray-100 text-white'>{props.btn}</button>
      </div>
    </div>
  )
}

export default Banner3
