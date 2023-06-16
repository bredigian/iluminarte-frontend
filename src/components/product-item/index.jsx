import React, { useState } from "react"

import Modal from "../modal"
import ProductDetail from "../product-detail"

const ProductItem = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleHover = () => {
    setIsHovered(!isHovered)
  }
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="product-item relative flex flex-col items-center gap-4 flex-wrap h-[420px]">
      <div className="product-item__img w-3">
        <img
          className="w-full"
          src={data?.IMAGENES[0]?.url}
          alt={`Imagen de la vela ${data?.IMAGENES[0]?.color}`}
        />
      </div>
      <h2 className="product-item__name text-dark text-lg font-bold max-w-xs text-center">
        {data?.NOMBRE}
      </h2>
      <button
        type="button"
        className="z-10 absolute w-full h-full bg-transparent cursor-pointer hover:bg-tertiary-light-transparent duration-150 ease-in-out"
        onClick={openModal}
      ></button>
      <Modal show={showModal}>
        <ProductDetail data={data} closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default ProductItem
