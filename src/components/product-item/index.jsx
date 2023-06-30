import React, { useState } from "react"
import { useProductsStore, useUserStore } from "../../store"

import Modal from "../modal"
import ProductDetail from "../product-detail"
import { Pulsar } from "@uiball/loaders"
import { StarIcon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { toast } from "sonner"

const ProductItem = ({ data, edit }) => {
  const { deleteProduct, setProductOfTheMonth } = useProductsStore()
  const { token } = useUserStore()

  const [showModal, setShowModal] = useState(false)
  const [modalConfirmFavourite, setModalConfirmFavourite] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const [modalConfirmDelete, setModalConfirmDelete] = useState(false)

  const handleModalFavourite = () => {
    setModalConfirmFavourite(!modalConfirmFavourite)
  }

  const handleModalDelete = () => {
    setModalConfirmDelete(!modalConfirmDelete)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleUpdate = async () => {
    setIsUpdating(true)
    try {
      await setProductOfTheMonth(data?.CODIGO)
      toast.success("Producto actualizado correctamente")
      handleModalFavourite()
      setIsUpdating(false)
    } catch {
      toast.error("Error al actualizar el producto")
      setIsUpdating(false)
    }
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(data?.CODIGO)
      toast.success("Producto eliminado correctamente")
      handleModalDelete()
    } catch (error) {
      toast.error("Error al eliminar el producto")
    }
  }

  return (
    <div className="product-item relative flex flex-col items-center gap-4 flex-wrap h-[420px] w-[300px] rounded-xl">
      <div className="product-item__img w-3">
        <img
          className="w-full"
          src={data?.IMAGENES[0]?.url}
          alt={`Imagen de la vela ${data?.IMAGENES[0]?.color}`}
        />
      </div>
      <h2 className="product-item__name text-dark text-lg font-bold max-w-xs text-center px-1">
        {data?.NOMBRE}
      </h2>
      {edit ? (
        <div className="product-item__edit flex items-center justify-center gap-4 z-0 absolute w-full h-full bg-transparent rounded-xl opacity-0 hover:opacity-100 hover:bg-dark-transparent duration-150 ease-in-out">
          <button type="button" onClick={handleModalFavourite}>
            <StarIcon width={40} className="text-white hover:text-[#FFEF40]" />
          </button>
          <button type="button" onClick={handleModalDelete}>
            <XMarkIcon width={40} className="text-white hover:text-[#FF2E00]" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="z-9 absolute w-full h-full bg-transparent cursor-pointer rounded-xl hover:bg-tertiary-light-transparent duration-150 ease-in-out"
          onClick={openModal}
        ></button>
      )}
      <Modal show={showModal}>
        <ProductDetail data={data} closeModal={closeModal} />
      </Modal>
      {token && edit && (
        <Modal show={modalConfirmDelete} minWidth={"min-w-"}>
          <div className="modal-delete flex flex-col items-center gap-8 bg-white p-8">
            <h1 className="font-serif text-3xl text-center">
              ¿Estás seguro que desea eliminar este producto?
            </h1>
            <div className="modal-delete__buttons flex items-center gap-8">
              <button
                className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={handleModalDelete}
              >
                No
              </button>
              {isUpdating ? (
                <div className="grid place-items-center w-0-8">
                  <Pulsar size={45} color="#292929" />
                </div>
              ) : (
                <button
                  className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                  type="button"
                  onClick={handleDelete}
                >
                  Sí
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
      {token && edit && (
        <Modal show={modalConfirmFavourite}>
          <div className="modal-fav flex flex-col items-center gap-8 bg-white p-8">
            <h1 className="font-serif text-3xl text-center">
              ¿Estás seguro que desea marcar como "Vela del mes" a este
              producto?
            </h1>
            <div className="modal-fav__buttons flex gap-8">
              <button
                className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={handleModalFavourite}
              >
                No
              </button>
              {isUpdating ? (
                <div className="grid place-items-center w-0-8">
                  <Pulsar size={45} color="#292929" />
                </div>
              ) : (
                <button
                  className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                  type="button"
                  onClick={handleUpdate}
                >
                  Sí
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ProductItem
