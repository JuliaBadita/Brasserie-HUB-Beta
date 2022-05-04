import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-HUB-Home.png'

const NavbarJu = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white sticky">
        {/* Version desktop  */}

        <img
          src={logo}
          className="w-[10rem] m-[2rem]"
          alt="logo académie Jedi"
        />
        <nav className="m-auto">
          <ul className="flex list-none">
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink to="/" className="">
                Accueil
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink to="/" className="">
                A propos
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink to="" className="">
                Nos valeurs
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink to="" className="">
                Nos bières
              </NavLink>
            </li>
            <li className="font-gravitas mx-10 text-[1.5rem] text-[#292B29]">
              <NavLink to="" className="">
                Contact
              </NavLink>
            </li>
            <li className="font-gravitas mx-14 text-[1.5rem] text-[#292B29]">
              <NavLink to="" className="">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavbarJu
