import { Footer, Header, NavNavigation } from "./components"
import React, { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Home } from "./screens"

const App = () => {
  const [showNavigator, setShowNavigator] = useState(false)
  const handleNavigator = () => {
    setShowNavigator(!showNavigator)
  }
  return (
    <Router>
      <NavNavigation
        handleNavigator={handleNavigator}
        showNavigator={showNavigator}
      />
      <Header handleNavigator={handleNavigator} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<h1>AboutScreen</h1>} />
        <Route exact path="/products" element={<h1>ProductsScreen</h1>} />
        <Route exact path="/blog" element={<h1>ProductsScreen</h1>} />
        <Route exact path="/contact" element={<h1>ContactScreen</h1>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
