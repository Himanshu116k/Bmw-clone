import React from 'react'
import Model from "./Model"

const Last1 = () => {
  return (
    <div className=" p-[10%]  flex justify-around items-center h-[47vh] w-full">
        {/* <div className='w-[45%] '><img className='h-[43vh]' src="https://images.pexels.com/photos/17888840/pexels-photo-17888840/free-photo-of-a-blue-bmw-m5-parked-on-a-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" /></div> */}
        <Model/>
        <div  className='w-[45%] h-full flex flex-col justify-center items-start gap-[3vh]'><h2 className="text-[36px] font-extralight">Maker of this website.</h2>
        <p className="text-[16px] font-extralight">This site is made of using React and Tailwind Css <br /> <strong>By Himanshu Kumar</strong></p>

<p className='flex justify-center items-center'>Know More <a href="https://www.linkedin.com/in/himanshu-kumar-579767338/"><svg width="50" height="20" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.455c0-1.265-.024-2.895-1.764-2.895s-2.036 1.381-2.036 2.805v5.545h-3v-10h2.885v1.365h.042c.403-.765 1.388-1.568 2.855-1.568 3.054 0 3.618 2.011 3.618 4.624v5.579z"/>
</svg>
</a></p></div>


</div>
    
  )
}

export default Last1
