import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-HUB-Home.png'
import insta from '../assets/Instagram.png'
import facebook from '../assets/Facebook.png'

const NavbarJu = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white sticky">
        {/* Version desktop  */}

        <img
          src={logo}
          className="w-[10rem] m-[2rem]"
          alt="logo brasserie HUB"
        />
        <nav className="m-auto">
          <ul className="flex list-none">
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/"
                // className="hover:underline decoration-[#c15446] decoration-2 hover:text-[#c15446]"
                className="hover:text-[#C34839]"
              >
                ACCUEIL
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/about"
                // className="hover:underline decoration-[#c65f51] decoration-2 hover:text-[#c65f51]"
                className="hover:text-[#C34839]"
              >
                À PROPOS
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/values"
                // className="hover:underline decoration-[#c65f51] decoration-2 hover:text-[#c65f51]"
                className="hover:text-[#C34839]"
              >
                NOS VALEURS
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/beer"
                // className="hover:underline decoration-[#c65f51] decoration-2 hover:text-[#c65f51]"
                className="hover:text-[#C34839]"
              >
                NOS BIÈRES
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/contact"
                // className="hover:underline decoration-[#c65f51] decoration-2 hover:text-[#c65f51]"
                className="hover:text-[#C34839]"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="font-gravitas mx-14 text-[1.5rem] text-[#292B29]">
              <NavLink
                to="/shop"
                // className="hover:underline decoration-[#c65f51] decoration-2 hover:text-[#c65f51]"
                className="hover:text-[#C34839]"
              >
                SHOP
              </NavLink>
            </li>
          </ul>
        </nav>
        <article className="flex flex-row m-[-2rem]">
          <img src={insta} className="w-[3rem] m-[2rem]" alt="logo Instagram" />
          <img
            src={facebook}
            className="w-[3rem] m-[2rem]"
            alt="logo Facebook"
          />
        </article>
      </header>
    </>
  )
}

export default NavbarJu
