import { Footer, Header } from "./components"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Home } from "./screens"
import React from "react"

const App = () => {
  return (
    <Router>
      <Header />
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
