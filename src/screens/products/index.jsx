import React, { useEffect } from "react"

import { ProductItem } from "../../components"
import { useProductsStore } from "../../store"

const Products = () => {
  const { products, getProducts } = useProductsStore()
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <div className="bg-white p-8">
      {products ? (
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
  )
}

export default Products
