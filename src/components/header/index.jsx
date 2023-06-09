import { NavLink, useLocation, useRoutes } from "react-router-dom"
import React, { useEffect, useState } from "react"

import { Bars3Icon } from "@heroicons/react/24/solid"
import { sections } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"
import svgLogoDark from "../../assets/images/logos/logo_morado.svg"

const Header = ({ handleNavigator }) => {
  const route = useLocation().pathname
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header
      className={`xs:flex xs:justify-between xs:sticky xs:top-0 xs:bg-primary xs:p-6 ${
        route === "/"
          ? scrolled
            ? "sm:bg-white sm:fixed sm:ease-out sm:duration-150"
            : "sm:bg-transparent sm:fixed sm:ease-out sm:duration-150"
          : "sm:bg-white"
      } z-10 header sm:flex items-center sm:justify-around w-full sm:px-4 ${
        scrolled ? "sm:py-4" : "sm:py-10"
      } }`}
    >
      <Bars3Icon
        onClick={handleNavigator}
        className="xs:relative sm:hidden text-white w-0-3"
      />
      <img
        className="header-img xs:w-1 xl:w-logo"
        src={route !== "/" ? svgLogoDark : scrolled ? svgLogoDark : svgLogo}
        alt="Iluminarte Logo"
      />
      <nav className="xs:hidden header-navbar sm:flex sm:gap-2 lg:gap-4">
        {sections.map((section) => {
          return (
            <NavLink
              key={section.id}
              className={`ease-in-out duration-150 sm:text-sm lg:text-base font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1 border-2 border-transparent ${
                scrolled
                  ? "text-primary hover:border-primary"
                  : "text-white hover:bg-primary"
              }`}
              // className={({ isActive, isPending }) =>
              //   isPending
              //     ? "pending"
              //     : isActive
              //     ? `ease-in-out duration-150 sm:text-sm lg:text-base ${
              //         route === "/"
              //           ? scrolled
              //             ? "bg-primary text-white"
              //             : "bg-primary text-white"
              //           : "bg-primary text-white"
              //       }  font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1`
              //     : `ease-in-out duration-150 sm:text-sm lg:text-base ${
              //         route === "/"
              //           ? scrolled
              //             ? "bg-transparent text-primary"
              //             : "bg-transparent text-white"
              //           : ""
              //       } font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1 ${
              //         (route === "/") & scrolled
              //           ? "hover:bg-primary hover:text-white"
              //           : "hover:bg-primary hover:text-white"
              //       }`
              // }
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
