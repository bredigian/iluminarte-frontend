import { NavLink } from "react-router-dom"
import React from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { sections } from "../../constants"
import { useUserStore } from "../../store"

const NavNavigation = ({ handleNavigator, showNavigator }) => {
  const { token } = useUserStore()

  return (
    <nav
      className={`xs:fixed z-20 h-full w-[170px] bg-[#f4e5e1] shadow-2xl flex flex-col items-center gap-8 py-4 ease-in-out duration-300 ${
        showNavigator ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <XMarkIcon
        onClick={handleNavigator}
        className="text-primary w-[30px] mt-[10px]"
      />
      <ul className="flex flex-col items-center gap-2 w-full">
        {sections.map((section) => {
          if (!token && section.id === 6) {
            return null
          } else {
            return (
              <NavLink
                key={section.id}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-sm text-primary font-bold py-1 rounded-full border-[2px] border-tertiary-light text-center w-1-3"
                    : "text-sm text-primary font-bold py-1 rounded-full border-[2px] border-transparent text-center w-1-3 hover:bg-primary hover:text-white"
                }
                to={section.path}
                onClick={handleNavigator}
              >
                {section.title}
              </NavLink>
            )
          }
        })}
      </ul>
    </nav>
  )
}

export default NavNavigation
