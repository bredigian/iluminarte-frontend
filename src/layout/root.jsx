import { Footer, Header, NavNavigation } from "../components"

import { Outlet } from "react-router-dom"
import { useState } from "react"

export const RootLayout = () => {
  const [showNavigator, setShowNavigator] = useState(false)

  const handleNavigator = () => {
    setShowNavigator(!showNavigator)
  }

  return (
    <>
      <NavNavigation
        handleNavigator={handleNavigator}
        showNavigator={showNavigator}
      />
      <Header handleNavigator={handleNavigator} />
      <Outlet />
      <Footer />
    </>
  )
}
