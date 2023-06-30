import { DecorativeAspects, Modal } from "../../components"
import React, { useState } from "react"

import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/solid"
import blogBg from "../../assets/images/blog/fondo.png"
import monthImg from "../../assets/images/home/month/velaMonthBackground.png"
import productsBg from "../../assets/images/products/header/fondo.png"
import { useUserStore } from "../../store"

const Administration = () => {
  const { user, logOut } = useUserStore()
  const [showModal, setShowModal] = useState(false)
  const [showModalMonth, setShowModalMonth] = useState(false)

  const handleModalMonth = () => {
    setShowModalMonth(!showModalMonth)
  }

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const signOut = async () => {
    await logOut()
    closeModal()
  }
  const administrationItems = [
    { name: "Productos", path: "/administration/products", img: productsBg },
    { name: "Blog", path: "/administration/blog", img: blogBg },
  ]
  return (
    <section className="flex flex-col p-8">
      <div className="administracion-header flex justify-around items-start">
        <h1 className="font-serif text-4xl text-dark">
          Bienvenido a la Administracíon de Iluminarte
        </h1>
        <div className="administration-header__admin flex flex-col items-end gap-1">
          <p className="text-dark font-bold">{user?.email}</p>
          <button
            type="button"
            className="text-dark font-bold text-base hover:underline"
            onClick={openModal}
          >
            Cerrar sesión
          </button>
        </div>
        <Modal show={showModal} minWidth={"min-w-"}>
          <div className="modal-signout flex flex-col items-center gap-8 bg-white p-8">
            <h1 className="font-serif text-3xl">
              ¿Estás seguro que desea cerrar sesión?
            </h1>
            <div className="modal-signout__buttons flex gap-8">
              <button
                className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={closeModal}
              >
                No
              </button>
              <button
                className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={signOut}
              >
                Sí
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <div className="administration-items flex items-start justify-center gap-12 p-8">
        {administrationItems.map((item) => {
          return (
            <div
              key={`${item.path}-${item.name}`}
              className="administration-items__item relative flex items-center justify-center rounded-[33px] overflow-hidden"
            >
              <Link
                to={item?.path}
                onClick={null}
                className="absolute w-full h-full grid place-items-center cursor-pointer bg-transparent hover:bg-dark-transparent duration-150 ease-in-out backdrop-blur-sm"
              >
                <h2 className="text-white font-serif text-3xl select-none">
                  {item?.name}
                </h2>
              </Link>
              <img
                className="h-[400px] w-[600px] object-cover object-left"
                src={item?.img}
                alt={`Imagen de administracion de ${item?.name}`}
              />
            </div>
          )
        })}
        <div className="administration-items__item relative flex items-center justify-center rounded-[33px] overflow-hidden">
          <div
            onClick={handleModalMonth}
            className="absolute w-full h-full grid place-items-center cursor-pointer bg-transparent hover:bg-dark-transparent duration-150 ease-in-out backdrop-blur-sm"
          >
            <h2 className="text-white text-center font-serif text-3xl select-none">
              Aspectos decorativos
            </h2>
          </div>
          <img
            className="h-[400px] w-[600px] object-cover object-left"
            src={monthImg}
            alt={`Imagen de administracion de la vela del mes`}
          />
        </div>
      </div>
      <Modal show={showModalMonth}>
        <div className="modal-addProduct flex flex-col items-center gap-4 bg-white py-6 px-6">
          <div className="flex items-start justify-between w-full">
            <h1 className="font-serif text-2xl text-dark">
              Aspectos decorativos
            </h1>
            <button type="button" onClick={handleModalMonth}>
              <XMarkIcon width={30} color="#292929" />
            </button>
          </div>
          <DecorativeAspects handleModal={handleModalMonth} />
        </div>
      </Modal>
    </section>
  )
}

export default Administration
