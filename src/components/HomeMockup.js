import React from 'react'
import mockup1 from '../assets/mockup1.png'

const HomeMockup = () => {
  return (
    <>
      <article className="flex justify-center items-center flex-wrap lg:flex-nowrap bg-[#AACCCC] h-screen">
        <img src={mockup1} alt="mockup bière HUB" className="h-4/5" />
        <img src={mockup1} alt="mockup bière HUB" className="h-4/5" />
        <img src={mockup1} alt="mockup bière HUB" className="h-4/5" />
      </article>
    </>
  )
}

export default HomeMockup
