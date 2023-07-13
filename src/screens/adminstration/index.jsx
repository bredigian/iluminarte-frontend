import { DecorativeAspects, Modal } from "../../components"
import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import { Pulsar } from "@uiball/loaders"
import { XMarkIcon } from "@heroicons/react/24/solid"
import blogBg from "../../assets/images/blog/fondo.png"
import monthImg from "../../assets/images/home/month/velaMonthBackground.png"
import productsBg from "../../assets/images/products/header/fondo.png"
import { useUserStore } from "../../store"
import useWidth from "../../hooks/useWidth"

const Administration = () => {
  const width = useWidth()

  const { user, logOut } = useUserStore()

  const [showModal, setShowModal] = useState(false)
  const [showModalMonth, setShowModalMonth] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const administrationItems = [
    { name: "Productos", path: "/administration/products", img: productsBg },
    { name: "Blog", path: "/administration/blog", img: blogBg },
  ]

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
    setIsLoggingOut(true)
    await logOut()
    closeModal()
    setIsLoggingOut(false)
  }

  return (
    <section className="flex flex-col p-8">
      <div className="administracion-header flex xs:flex-col-reverse md:flex-row justify-around xs:items-center md:items-start xs:gap-8 md:gap-0">
        <h1 className="font-serif xs:text-xl text-center lg:text-4xl text-dark">
          Bienvenido a la Administracíon de Iluminarte
        </h1>
        <div className="administration-header__admin flex xs:flex-row md:flex-col items-end gap-1 xs:w-full md:w-fit xs:justify-between">
          <p className="text-dark xs:text-xs md:text-base font-bold">
            {user?.email}
          </p>
          <button
            type="button"
            className="text-dark font-bold xs:text-xs md:text-base hover:underline"
            onClick={openModal}
          >
            Cerrar sesión
          </button>
        </div>
        <Modal show={showModal}>
          <div className="modal-signout flex flex-col items-center gap-8 bg-white p-8">
            <h1 className="font-serif xs:text-lg text-center md:text-xl lg:text-3xl">
              ¿Estás seguro que desea cerrar sesión?
            </h1>
            <div className="modal-signout__buttons flex gap-8">
              <button
                className="border-2 border-dark xs:px-2 xs:py-1 lg:px-4 lg:py-2 rounded-full xs:w-[60px] lg:w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={closeModal}
              >
                No
              </button>
              {isLoggingOut ? (
                <div className="grid place-items-center w-0-8">
                  <Pulsar size={42} color="#292929" />
                </div>
              ) : (
                <button
                  className="border-2 border-dark xs:px-2 xs:py-1 lg:px-4 lg:py-2 rounded-full xs:w-[60px] lg:w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                  type="button"
                  onClick={signOut}
                >
                  Sí
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>
      {width <= 970 ? (
        <div className="auth flex flex-col items-center gap-4 p-8">
          <h2 className="xs:text-xl md:text-2xl text-center font-serif font-bold">
            Funciones administrativas deshabilitadas
          </h2>
          <p className="xs:text-base md:text-lg text-center italic">
            Para acceder a las funciones administrativas se debe acceder desde
            un navegador de Escritorio.
          </p>
        </div>
      ) : (
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
      )}
      <Modal show={showModalMonth && width > 970}>
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
