import React from 'react'
import HomeMockup from '../components/HomeMockup'
import MapHUB from '../components/MapHUB'
import Slider from '../components/Slider/Slider'
import ButtonAbout from '../components/ButtonAbout'
import Aretha from '../assets/aretha.png'
import Frida from '../assets/frida.png'
import Mathilda from '../assets/mathilda.png'
import Goa from '../assets/goa.png'

const HomeTest = () => {
  return (
    <div>
      <HomeMockup />
      <Slider />
      <MapHUB />
      <ButtonAbout />
      <article className="grid grid-cols-3">
        <img src={Aretha} alt="" className="" />
        <img src={Frida} alt="" className="" />
        <img src={Mathilda} alt="" className="" />
        <img src={Goa} alt="" className="" />
        <img src={Frida} alt="" className="" />
        <img src={Goa} alt="" className="" />
      </article>
    </div>
  )
}

export default HomeTest
