import { Input, Modal, ProductForm, ProductItem } from "../../components"
import React, { useEffect, useState } from "react"

import { Pulsar } from "@uiball/loaders"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { toast } from "sonner"
import { useProductsStore } from "../../store"
import useWidth from "../../hooks/useWidth"

const AdministrationProducts = () => {
  const width = useWidth()

  const { totalPages, currentPage, products, getProducts } = useProductsStore()

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

  const changePage = async (page) => {
    await getProducts(page)
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

  if (width <= 970) {
    return (
      <div className="auth flex flex-col items-center gap-4 p-8">
        <h2 className="xs:text-xl md:text-2xl text-center font-serif font-bold">
          Funciones administrativas deshabilitadas
        </h2>
        <p className="xs:text-base md:text-lg text-center italic">
          Para acceder a las funciones administrativas se debe acceder desde un
          navegador de Escritorio.
        </p>
      </div>
    )
  } else {
    return (
      <section className="adminstration-products flex flex-col items-center p-8 w-full">
        <div className="administration-products__items flex flex-col items-center w-full">
          <div className="administration-products__items-header flex gap-24 items-start justify-between w-full px-8">
            <h1 className="font-serif text-3xl text-dark flex-grow">
              Productos
            </h1>
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
        <footer className="w-full flex items-center justify-center xs:gap-2 sm:gap-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((item) => (
            <button
              key={"pagination__button__" + item}
              className={`hover:bg-secondary-light w-[30px] h-[30px] rounded-full ${
                item === currentPage ? "bg-secondary-light" : "bg-transparent"
              }`}
              onClick={async () => {
                window.scrollTo({ top: 0 })
                await changePage(item)
              }}
            >
              {item}
            </button>
          ))}
        </footer>
        <Modal show={showModal && width > 970} width={"w-[850px]"}>
          <div className="modal-addProduct w-full flex flex-col items-center gap-4 bg-white py-6 px-6">
            <div className="flex items-start justify-between w-full">
              <h1 className="font-serif text-2xl text-dark">
                Agregar producto
              </h1>
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
}

export default AdministrationProducts
