import React, { useEffect } from "react"

import { ProductItem } from "../../components"
import { useProductsStore } from "../../store"

const Products = () => {
  const { products, getProducts, categories, getCategories } =
    useProductsStore()
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])
  return (
    <section
      id="products"
      className="products flex flex-col items-center gap-4 w-full bg-white"
    >
      <div className="products-categories flex items-center justify-evenly bg-products-section bg-cover bg-no-repeat bg-center w-full h-2">
        {categories.map((category) => {
          return (
            <button
              type="button"
              className="text-white text-2xl bg-[#ffffff48] px-4 py-2 rounded-full duration-150 border-2 hover:bg-secondary hover:border-secondary w-2 text-center"
            >
              {category.NOMBRE}
            </button>
          )
        })}
      </div>
      <div className="products-container flex items-center gap-4 flex-wrap p-8">
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductItem key={product.ID} data={product} />
          })
        ) : (
          <div className="w-full h-2 grid place-items-center">
            <p className="font-serif text-5xl text-dark">
              Ocurrió un error al obtener los productos...
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
