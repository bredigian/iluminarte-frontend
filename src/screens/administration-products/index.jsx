import { Input, Modal, ProductItem } from "../../components"
import React, { useEffect, useState } from "react"

import { XMarkIcon } from "@heroicons/react/24/solid"
import { useProductsStore } from "../../store"

const AdministrationProducts = () => {
  const { products, getProducts } = useProductsStore()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const filterProducts = (search) => {
    const productsFiltered = products.filter((product) => {
      return product.NOMBRE.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredProducts(productsFiltered)
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    filterProducts(search)
  }, [search])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])
  return (
    <section className="adminstration-products grid place-self-start grid-cols-6 p-8">
      <div className="administration-products__items col-span-5">
        <div className="administration-products__items-header flex items-start justify-between px-8">
          <h1 className="font-serif text-3xl text-dark">Productos</h1>
          <Input
            onChangeValue={(e) => setSearch(e.target.value)}
            value={search}
            data={{
              id: "input_search_product",
              type: "text",
              placeholder: "Buscar producto",
            }}
            styles={"bg-white-light"}
          />
        </div>
        <div className="administration-products__items-container flex flex-wrap gap-4 p-8">
          {filteredProducts.length > 0 ? (
            filteredProducts?.map((product) => {
              return <ProductItem key={product.ID} data={product} edit={true} />
            })
          ) : (
            <div className="grid place-items-center h-2">
              <p className="font-serif text-4xl text-dark">
                No se encontró ningun producto con el nombre seleccionado.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="administration-products__handle flex items-start justify-end col-span-1">
        <button
          type="button"
          onClick={handleModal}
          className="font-serif text-xl text-dark hover:underline"
        >
          Agregar producto
        </button>
      </div>
      <Modal show={showModal}>
        <div className="modal-addProduct flex items-center justify-between bg-white p-8">
          <h1 className="font-serif text-3xl text-dark">Agregar producto</h1>
          <button type="button" onClick={handleModal}>
            <XMarkIcon width={40} color="#292929" />
          </button>
        </div>
      </Modal>
    </section>
  )
}

export default AdministrationProducts
