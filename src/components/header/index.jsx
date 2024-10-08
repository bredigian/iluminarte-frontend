import { Link, ScrollRestoration, useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react"

import { Bars3Icon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/outline"
import { sections } from "../../constants"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"
import svgLogoDark from "../../assets/images/logos/logo_morado.svg"
import { useUserStore } from "../../store"
import useWidth from "../../hooks/useWidth"

const Header = ({ handleNavigator }) => {
  const width = useWidth()

  const route = useLocation().pathname
  const { token } = useUserStore()

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
      className={`xs:flex xs:justify-between xs:sticky xs:top-0 sm:px-4 xs:bg-[#f4e5e1] xs:p-6 ${
        route !== "/"
          ? `sm:sticky sm:bg-white`
          : scrolled
          ? "sm:bg-white sm:fixed sm:ease-out sm:duration-150 sm:py-4"
          : `sm:bg-transparent sm:fixed sm:ease-out sm:duration-150 sm:py-10`
      } z-10 header sm:flex items-center sm:justify-around w-full`}
    >
      <Bars3Icon
        onClick={handleNavigator}
        className="xs:relative sm:hidden text-primary w-0-3"
      />
      <Link to={"/"}>
        <img
          className="header-img xs:w-1 xl:w-logo"
          src={
            width >= 768
              ? route !== "/"
                ? svgLogoDark
                : scrolled
                ? svgLogoDark
                : svgLogo
              : svgLogoDark
          }
          alt="Iluminarte Logo"
        />
      </Link>
      <nav className="xs:hidden header-navbar sm:flex sm:gap-2 lg:gap-4">
        {sections.map((section) => {
          if (token && section.title === "Administrador") {
            return (
              <Link
                key={section.id}
                className={`ease-in-out duration-150 flex justify-center font-bold px-4 py-2 rounded-full text-center border-2 border-transparent ${
                  route === "/"
                    ? scrolled
                      ? "text-primary hover:border-primary"
                      : "text-white hover:bg-primary"
                    : "text-primary hover:border-primary"
                }`}
                to={section.path}
              >
                <UserIcon width={25} />
              </Link>
            )
          } else {
            if (section.title !== "Administrador") {
              return (
                <Link
                  key={section.id}
                  className={`ease-in-out duration-150 sm:text-sm lg:text-base font-bold px-6 py-2 rounded-full text-center lg:w-1-3 xl:w-1 border-2 border-transparent ${
                    route === "/"
                      ? scrolled
                        ? "text-primary hover:border-primary"
                        : "text-white hover:bg-primary"
                      : "text-primary hover:border-primary"
                  }`}
                  to={section.path}
                >
                  {section.title}
                </Link>
              )
            }
          }
        })}
      </nav>
      <ScrollRestoration />
    </header>
  )
}

export default Header
