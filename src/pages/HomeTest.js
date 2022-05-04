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
import Article1Home from '../components/Article1Home'
import NavbarJu from '../components/NavbarJu'

const HomeTest = () => {
  return (
    <div>
      <NavbarJu />
      <HomeMockup />
      <Article1Home />
      <Slider />
      <section className="bg-[#AACCCC] h-screen">
        <h2 className="text-center text-[2.3rem] font-gravitas">
          Nos produits
        </h2>
        <article className="grid grid-cols-3 place-items-center">
          <img src={Aretha} alt="" className="h-[65%] w-[65%]" />
          <img src={Frida} alt="" className="h-[65%] w-[65%]" />
          <img src={Mathilda} alt="" className="h-[65%] w-[65%]" />
          <img src={Goa} alt="" className="h-[65%] w-[65%]" />
          <img src={Frida} alt="" className="h-[65%] w-[65%]" />
          <img src={Goa} alt="" className="h-[65%] w-[65%]" />
        </article>
        <article className="flex content-center justify-evenly">
          <ButtonAbout />
          <ButtonShop />
        </article>
      </section>
      <MapHUB />
    </div>
  )
}

export default HomeTest
