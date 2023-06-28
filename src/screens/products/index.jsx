import React, { useEffect, useState } from "react"

import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ProductItem } from "../../components"
import { Pulsar } from "@uiball/loaders"
import { useProductsStore } from "../../store"

const Products = () => {
  const { products, getProducts, categories, getCategories } =
    useProductsStore()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState([])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filterProducts = async (category) => {
    return products.filter((product) => {
      if (product.CATEGORIAS.includes(category)) {
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
      <div className="products-container flex items-center justify-center gap-4 flex-wrap p-8">
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
      <div className="products-footer flex flex-col items-center gap-8 w-full p-8">
        <h1 className="font-serif text-[50px] font-bold">
          Descubre otros modelos
        </h1>
        <div className="products-footer__items flex items-center justify-center gap-24 w-full">
          {categories.map((category) => {
            return (
              <button
                onClick={() => handleCategory(category.VALOR)}
                type="button"
                className={`${
                  selectedCategory === category.VALOR
                    ? "bg-secondary"
                    : "bg-[#e8cdd8]"
                } hover:bg-secondary text-white text-2xl px-4 py-2 rounded-full duration-150 w-2 text-center`}
              >
                {category.NOMBRE}
              </button>
            )
          })}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed right-10 top-[50%] rounded-full border-[3px] p-4 border-primary w-fit"
      >
        <ChevronUpIcon className="w-[50px] text-primary" />
      </button>
    </section>
  )
}

export default Products
