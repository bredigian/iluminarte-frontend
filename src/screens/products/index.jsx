import React, { useEffect } from "react"

import { ProductItem } from "../../components"
import { useProductsStore } from "../../store"

const Products = () => {
  const { products, getProducts } = useProductsStore()
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <div className="products flex items-center gap-4 w-full bg-fff p-8">
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
  )
}

export default Products
