import React, { useEffect, useState } from "react"

import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ProductItem } from "../../components"
import { Pulsar } from "@uiball/loaders"
import { useProductsStore } from "../../store"

const Products = () => {
  const {
    products,
    totalPages,
    currentPage,
    getProducts,
    categories,
    getCategories,
  } = useProductsStore()
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

  const changePage = async (page) => {
    await getProducts(page)
  }

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  return (
    <section
      id="products"
      className="products flex flex-col items-center w-full bg-white"
    >
      <div className="products-categories flex items-center flex-wrap justify-evenly xs:gap-2 sm:gap-0 bg-products-section bg-cover bg-no-repeat bg-center w-full xs:h-[120px] sm:h-[200px] lg:h-[300px]">
        {categories.map((category) => {
          return (
            <button
              onClick={() => handleCategory(category.VALOR)}
              type="button"
              className={`text-white xs:text-sm sm:text-lg lg:text-2xl ${
                selectedCategory === category.VALOR
                  ? "bg-secondary"
                  : "bg-[#ffffff48]"
              } xs:px-2 xs:py-1 lg:px-4 lg:py-2 rounded-full duration-150 border-2 hover:bg-secondary hover:border-secondary xs:w-[120px] sm:w-[160px] lg:w-2 text-center`}
            >
              {category.NOMBRE}
            </button>
          )
        })}
      </div>
      <div className="products-container flex items-center justify-center xs:gap-2 lg:gap-4 flex-wrap xs:p-4 lg:p-8">
        {filteredProducts.length === 0 && categories.length === 0 ? (
          <Pulsar color="#292929" size={50} />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductItem key={product.CODIGO} data={product} />
          })
        ) : (
          <p className="font-serif xs:text-sm text-center lg:text-4xl text-dark">
            No se encontraron productos de la categoria seleccionada.
          </p>
        )}
      </div>
      <footer className="w-full flex items-center justify-center xs:gap-2 sm:gap-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((item) => (
          <button
            key={"pagination__button__" + item}
            className={`hover:bg-secondary-light w-[30px] h-[30px] rounded-full ${
              item === currentPage ? "bg-secondary-light" : "bg-transparent"
            }`}
            onClick={() => {
              window.scrollTo({ top: 0 })
              setSelectedCategory(null)
              changePage(item)
            }}
          >
            {item}
          </button>
        ))}
      </footer>
      <div className="products-footer flex flex-col items-center gap-8 w-full p-8">
        <h1 className="font-serif xs:text-xl sm:text-4xl lg:text-[50px] font-bold">
          Descubre otros modelos
        </h1>
        <div className="products-footer__items flex items-center justify-center flex-wrap xs:gap-4 lg:gap-24 w-full">
          {categories.map((category) => {
            return (
              <button
                onClick={() => handleCategory(category.VALOR)}
                type="button"
                className={`${
                  selectedCategory === category.VALOR
                    ? "bg-secondary"
                    : "bg-[#e8cdd8]"
                } hover:bg-secondary text-white xs:text-sm sm:text-lg lg:text-2xl xs:px-2 xs:py-1 lg:px-4 lg:py-2 rounded-full duration-150 xs:w-[120px] sm:w-[160px] lg:w-2 text-center`}
              >
                {category.NOMBRE}
              </button>
            )
          })}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed xs:right-5 lg:right-10 top-[50%] rounded-full xs:border-[2px] sm:border-[3px] xs:p-1 lg:p-4 border-primary w-fit"
      >
        <ChevronUpIcon className="xs:w-[20px] sm:w-[50px] text-primary" />
      </button>
    </section>
  )
}

export default Products
