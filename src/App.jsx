import {
  About,
  Administration,
  AdministrationBlog,
  AdministrationProducts,
  Auth,
  Blog,
  Contact,
  Home,
  Products,
} from "./screens"
import {
  Footer,
  Header,
  NavNavigation,
  RouteNotFound,
  RoutePrivate,
} from "./components"
import React, { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Toaster } from "sonner"

const App = () => {
  const [showNavigator, setShowNavigator] = useState(false)
  const handleNavigator = () => {
    setShowNavigator(!showNavigator)
  }
  return (
    <Router>
      <Toaster />
      <NavNavigation
        handleNavigator={handleNavigator}
        showNavigator={showNavigator}
      />
      <Header handleNavigator={handleNavigator} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/authentication" element={<Auth />} />
        <Route
          exact
          path="/administration"
          element={
            <RoutePrivate>
              <Administration />
            </RoutePrivate>
          }
        />
        <Route
          exact
          path="/administration/products"
          element={
            <RoutePrivate>
              <AdministrationProducts />
            </RoutePrivate>
          }
        />
        <Route
          exact
          path="/administration/blog"
          element={
            <RoutePrivate>
              <AdministrationBlog />
            </RoutePrivate>
          }
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
