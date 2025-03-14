import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        
        // <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
        <div className="outer">


            <div className="content">
                <ul className="items">
                    <img src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg" alt="" />
                    <li className='border1'>Home</li>
                    <li className='border1'>Electric</li>
                    <li className='border1'>Configuration</li>
                    <li className='border1'>Visit online shop</li>
                    <li className='border1'>more Bmw</li>
                </ul>

            </div>
            <div className="icons">
                <i  className='border1'class="fa-solid fa-user"></i>
                <i className='border1' class="fa-solid fa-cart-shopping"></i>
                <i  className='border1'class="fa-regular fa-heart"></i>
             
                <i  className='border1'class="fa-solid fa-location-dot"></i>
            </div>


        </div>
    )
}

export default Navbar
