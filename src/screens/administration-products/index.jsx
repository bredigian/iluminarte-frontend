import { Input, Modal, ProductForm, ProductItem } from "../../components"
import React, { useEffect, useState } from "react"

import { Pulsar } from "@uiball/loaders"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { toast } from "sonner"
import { useProductsStore } from "../../store"

const AdministrationProducts = () => {
  const { products, getProducts } = useProductsStore()
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)

  const filterProducts = (search) => {
    const productsFiltered = products?.filter((product) => {
      return product?.NOMBRE?.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredProducts(productsFiltered)
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const showMessage = (message, type) => {
    if (type === "success") {
      toast.success(message)
    } else {
      toast.error(message)
    }
  }

  useEffect(() => {
    getProducts()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    filterProducts(search)
  }, [search])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])
  return (
    <section className="adminstration-products flex flex-col items-center p-8 w-full">
      <div className="administration-products__items flex flex-col items-center w-full">
        <div className="administration-products__items-header flex gap-24 items-start justify-between w-full px-8">
          <h1 className="font-serif text-3xl text-dark flex-grow">Productos</h1>
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
          <button
            type="button"
            onClick={handleModal}
            className="font-serif text-xl text-dark hover:underline"
          >
            Agregar producto
          </button>
        </div>
        {loading ? (
          <div className="grid place-items-center h-2">
            <Pulsar color="#292929" size={50} />
          </div>
        ) : (
          <div className="administration-products__items-container justify-center flex flex-wrap gap-4 p-8">
            {filteredProducts?.length > 0 ? (
              filteredProducts?.map((product) => {
                return (
                  <ProductItem
                    key={product.CODIGO}
                    data={product}
                    edit={true}
                  />
                )
              })
            ) : (
              <div className="grid place-items-center h-2">
                <p className="font-serif text-4xl text-dark">
                  No se encontró ningun producto con el nombre seleccionado.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <Modal show={showModal}>
        <div className="modal-addProduct flex flex-col items-center gap-4 bg-white p-8">
          <div className="flex items-start justify-between w-full p-2">
            <h1 className="font-serif text-2xl text-dark">Agregar producto</h1>
            <button type="button" onClick={handleModal}>
              <XMarkIcon width={30} color="#292929" />
            </button>
          </div>
          <ProductForm showMessage={showMessage} handleModal={handleModal} />
        </div>
      </Modal>
    </section>
  )
}

export default AdministrationProducts
