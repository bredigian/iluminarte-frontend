import React, { useEffect, useState } from "react"

import { Bars3Icon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { sections } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"

const Header = ({ handleNavigator }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 250
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header
      className={`xs:flex xs:justify-between xs:sticky xs:top-0 xs:bg-primary xs:p-6 sm:fixed z-10 header sm:flex items-center sm:justify-around w-full sm:px-4 sm:py-10 sm:ease-out sm:duration-300 ${
        scrolled ? "sm:bg-primary" : "sm:bg-transparent"
      }`}
    >
      <Bars3Icon
        onClick={handleNavigator}
        className="xs:relative sm:hidden text-white w-0-3"
      />
      <img
        className="header-img xs:w-1 xl:w-logo"
        src={svgLogo}
        alt="Iluminarte Logo"
      />
      <nav className="xs:hidden header-navbar sm:flex sm:gap-2 lg:gap-4">
        {sections.map((section) => {
          return (
            <NavLink
              key={section.id}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `sm:text-sm lg:text-base ${
                      scrolled
                        ? "bg-white text-primary"
                        : "bg-primary text-white"
                    } ease-in-out duration-300 font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1`
                  : `sm:text-sm lg:text-base text-white font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1 ${
                      scrolled
                        ? "hover:bg-white hover:text-primary"
                        : "hover:bg-primary hover:text-white"
                    }`
              }
              to={section.path}
            >
              {section.title}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
