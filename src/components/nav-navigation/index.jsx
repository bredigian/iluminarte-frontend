import { NavLink } from "react-router-dom"
import React from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { sections } from "../../constants"

const NavNavigation = ({ handleNavigator, showNavigator }) => {
  return (
    <nav
      className={`xs:fixed z-20 h-full w-2 bg-primary flex flex-col items-center gap-8 py-4 ease-in-out duration-300 ${
        showNavigator ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <XMarkIcon onClick={handleNavigator} className="text-white w-0-5" />
      <ul className="flex flex-col items-center gap-2 w-full">
        {sections.map((section) => {
          return (
            <NavLink
              key={section.id}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-sm bg-white text-dark font-bold py-1 rounded-full text-center w-1-3"
                  : "text-sm text-white font-bold py-1 rounded-full text-center w-1-3 hover:bg-primary hover:text-white"
              }
              to={section.path}
            >
              {section.title}
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavNavigation
