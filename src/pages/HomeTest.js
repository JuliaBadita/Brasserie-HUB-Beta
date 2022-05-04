import React from 'react'
import HomeMockup from '../components/HomeMockup'
import MapHUB from '../components/MapHUB'
import Slider from '../components/Slider/Slider'
import ButtonAbout from '../components/ButtonAbout'
import Aretha from '../assets/aretha.png'
import Frida from '../assets/frida.png'
import Mathilda from '../assets/mathilda.png'
import Goa from '../assets/goa.png'
import ButtonShop from '../components/ButtonShop'

const HomeTest = () => {
  return (
    <div>
      <HomeMockup />
      <Slider />
      <MapHUB />
      <section className="bg-[#AACCCC] h-screen">
        <article className="grid grid-cols-3 place-items-center justify-evenly">
          <img src={Aretha} alt="" className="h-[65%] w-[65%]" />
          <img src={Frida} alt="" className="h-[65%] w-[65%]" />
          <img src={Mathilda} alt="" className="h-[65%] w-[65%]" />
          <img src={Goa} alt="" className="h-[65%] w-[65%]" />
          <img src={Frida} alt="" className="h-[65%] w-[65%]" />
          <img src={Goa} alt="" className="h-[65%] w-[65%]" />
          <ButtonAbout />
          <ButtonShop />
        </article>
      </section>
    </div>
  )
}

export default HomeTest
