import React, { useEffect, useState } from "react"

import { ProductItem } from "../../components"
import { Pulsar } from "@uiball/loaders"
import { useProductsStore } from "../../store"

const Products = () => {
  const { products, getProducts, categories, getCategories } =
    useProductsStore()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState([])
  const filterProducts = async (category) => {
    if (category === "all") return products
    return products.filter((product) => {
      if (product.CATEGORIA === category) {
        return product
      }
    })
  }
  const handleCategory = async (category) => {
    setSelectedCategory(category)
    setFilteredProducts(await filterProducts(category))
  }
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])
  return (
    <section
      id="products"
      className="products flex flex-col items-center w-full bg-white"
    >
      <div className="products-categories flex items-center justify-evenly bg-products-section bg-cover bg-no-repeat bg-center w-full h-[300px]">
        {categories.map((category) => {
          return (
            <button
              onClick={() => handleCategory(category.VALOR)}
              type="button"
              className={`text-white text-2xl ${
                selectedCategory === category.VALOR
                  ? "bg-secondary"
                  : "bg-[#ffffff48]"
              } px-4 py-2 rounded-full duration-150 border-2 hover:bg-secondary hover:border-secondary w-2 text-center`}
            >
              {category.NOMBRE}
            </button>
          )
        })}
      </div>
      <div className="products-container flex items-center gap-4 flex-wrap p-8">
        {filteredProducts.length === 0 && categories.length === 0 ? (
          <Pulsar color="#292929" size={50} />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductItem key={product.CODIGO} data={product} />
          })
        ) : (
          <p className="font-serif text-4xl text-dark">
            No se encontraron productos de la categoria seleccionada.
          </p>
        )}
      </div>
    </section>
  )
}

export default Products
