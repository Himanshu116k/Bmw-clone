import React from 'react'

const Services = (props) => {
  return (
    <>
    <div className="flex flex-col justify-evenly items-center">
   <h1 className="text-[25px] font-extralight">{props.name}</h1>
   <img className="h-[64px] w-[64px]" src={props.img} alt="" />
   <button className="w-[154px] h-[54px] bg-[#1c69d4] text-white"
    >Search now </button>
    </div>
    </>
  )
}

export default Services
