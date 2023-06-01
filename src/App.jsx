import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Header } from "./components"
import React from "react"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>HomeScreen</h1>} />
        <Route path="/about" element={<h1>AboutScreen</h1>} />
        <Route path="/products" element={<h1>ProductsScreen</h1>} />
        <Route path="/blog" element={<h1>ProductsScreen</h1>} />
        <Route path="/contact" element={<h1>ContactScreen</h1>} />
      </Routes>
    </Router>
  )
}

export default App
