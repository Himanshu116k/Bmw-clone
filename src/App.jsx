import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Servicesup'
import Ban1 from './Components/Banner1'
import First from './Components/first.mp4'
import Second from './Components/second.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <Banner src={First} p1="THE" h1="iX1" h2=" LONG WHEELBASE " p2="Introductory Price of ₹ 49,00,000 "  low="Find your BMW." />
     <Services/>
     {/* <Banner src={Second} p1="THE" h1="iX1" h2=" LONG WHEELBASE " p2="Introductory Price of ₹ 49,00,000 "  low="Find your BMW." /> */}
      <Ban1/>
    

    </>
  )
}

export default App
