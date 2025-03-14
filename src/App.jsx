import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Servicesup'
import Banner3 from './Components/Banner3'
import Ban1 from './Components/Banner1'
import First from './Components/first.mp4'
import Second from './Components/second.mp4'
import { useEffect } from 'react';
import Last from './Components/Last'

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg";
    document.head.appendChild(link);
  }, []);
  

  return (
    <>
    
     <Navbar/>
    <Banner src={First} p1="THE" h1="iX1" h2=" LONG WHEELBASE " p2="Introductory Price of ₹ 49,00,000 "  low="Find your BMW." />
     <Services/>
     {/* <Banner src={Second} p1="THE" h1="iX1" h2=" LONG WHEELBASE " p2="Introductory Price of ₹ 49,00,000 "  low="Find your BMW." /> */}
      <Ban1/>
      <Banner3 src={"https://bmw.scene7.com/is/image/BMW/iX:3to1?fmt=webp&wid=2560&hei=853"} h2="BMW iX xDrive50" p="Stay ahead of the curve."btn="Discover Now"/>
      <Banner3 src={"https://bmw.scene7.com/is/image/BMW/DI21_000048047_3000_3000:3to1?fmt=webp&wid=1504&hei=501"} h2="This is forwardism: The 7." p="Stay ahead of the curve." btn="Know More"/>
      <Banner3 src={"https://bmw.scene7.com/is/image/BMW/iX_Banner1:3to1?fmt=webp&wid=1504&hei=501"} h2="The iX: The joy of electric driving." p="100 % electric. 100 % driving pleasure. 100 % BMW.

Experience an entirely new sensation of sheer driving pleasure." btn="Know More"/>
<Last/>

    </>
  )
}

export default App
