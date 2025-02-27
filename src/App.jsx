import React from 'react'
import Header from './Components/Header'
import SectionComponent from './Components/SectionComponent'
import Slider from './Components/Slider'
import Accordian from './Components/Accordian'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Header/>
      <SectionComponent/>
      <div><Accordian/></div>
      <Footer/>
    </div>
  )
}

export default App
