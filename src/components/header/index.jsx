import { NavLink } from "react-router-dom"
import React from "react"
import svgLogo from "../../assets/images/logos/logo_blanco.svg"

const Header = () => {
  return (
    <header className="absolute z-10 header flex items-center justify-around w-full px-4 py-10">
      <img className="header-img w-logo" src={svgLogo} alt="Iluminarte Logo" />
      <nav className="header-navbar flex gap-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-base bg-primary text-white font-bold px-6 py-2 rounded-full text-center w-1"
              : "text-base text-white font-bold px-6 py-2 rounded-full text-center w-1"
          }
          to={"/"}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-base bg-primary text-white font-bold px-6 py-2 rounded-full text-center w-1"
              : "text-base text-white font-bold px-6 py-2 rounded-full text-center w-1"
          }
          to={"/about"}
        >
          Nosotros
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-base bg-primary text-white font-bold px-6 py-2 rounded-full text-center w-1"
              : "text-base text-white font-bold px-6 py-2 rounded-full text-center w-1"
          }
          to={"/products"}
        >
          Productos
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-base bg-primary text-white font-bold px-6 py-2 rounded-full text-center w-1"
              : "text-base text-white font-bold px-6 py-2 rounded-full text-center w-1"
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-base bg-primary text-white font-bold px-6 py-2 rounded-full text-center w-1"
              : "text-base text-white font-bold px-6 py-2 rounded-full text-center w-1"
          }
          to={"/contact"}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
