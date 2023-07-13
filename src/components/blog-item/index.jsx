import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { useBlogStore, useUserStore } from "../../store"

import Modal from "../modal"
import { Pulsar } from "@uiball/loaders"
import { toast } from "sonner"

const BlogItem = ({ data, openModal, showComplete, edit }) => {
  const { token } = useUserStore()

  const { deletePost } = useBlogStore()

  const [modalDelete, setModalDelete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deletePost(data?.ID)
      toast.success("Post eliminado correctamente")
      handleModalDelete()
      setIsDeleting(false)
    } catch (error) {
      toast.error("Error al eliminar el post")
      setIsDeleting(false)
    }
  }

  const maxLength = 175
  const description = data?.DESCRIPCION
  const truncatedDescription =
    description?.length > maxLength
      ? description?.substring(0, maxLength) + "..."
      : description

  const DESCRIPCION_FORMATED = data?.DESCRIPCION.replace(/\\n/g, "\n")

  return (
    <div
      className={`blog-container__item xs:w-[240px] lg:w-[320px] xs:h-[360px] lg:h-[480px] bg-tertiary-lighter flex flex-col items-center ${
        !showComplete ? "overflow-auto" : "overflow-hidden"
      } rounded-[33px] shadow-xl`}
    >
      {token && edit && (
        <div className="absolute grid place-items-center bg-transparent opacity-0 hover:opacity-100 hover:bg-dark-transparent duration-150 ease-in-out w-[320px] h-[275px] rounded-t-[33px]">
          <button type="button" onClick={handleModalDelete}>
            <XMarkIcon width={40} className="text-white hover:text-[#FF2E00]" />
          </button>
        </div>
      )}
      <div className="blog-container__item-img w-full">
        <img className="w-full" src={data?.IMG} alt="" />
      </div>
      <div className="blog-container__item-information h-full flex flex-col items-start  gap-1 p-4">
        <h2 className="font-bold text-dark xs:text-sm lg:text-lg">
          {data?.TITULO}
        </h2>
        {!showComplete ? (
          <p className="text-dark xs:text-[10px] lg:text-xs xs:max-h-[58px] lg:max-h-full overflow-auto">
            {truncatedDescription}
          </p>
        ) : (
          <p className="text-dark xs:text-[10px] lg:text-xs h-[110px] overflow-auto">
            {DESCRIPCION_FORMATED}
          </p>
        )}
        {!showComplete && (
          <button
            onClick={openModal}
            className="flex flex-grow items-end gap-2 w-full text-dark font-bold"
          >
            <ChevronRightIcon width={15} />
            <p className="text-xs">Leer más</p>
          </button>
        )}
      </div>
      {token && edit && (
        <Modal show={modalDelete}>
          <div className="modal-delete flex flex-col items-center gap-8 bg-white p-8">
            <h1 className="font-serif text-3xl text-center">
              ¿Estás seguro que desea eliminar este post?
            </h1>
            <div className="modal-delete__buttons flex gap-8">
              <button
                className="border-2 border-dark px-4 py-2 rounded-full w-0-8 text-dark font-bold hover:bg-dark hover:text-white duration-150 ease-in-out"
                type="button"
                onClick={handleModalDelete}
              >
                No
              </button>
              {isDeleting ? (
                <div className="grid place-items-center w-0-8">
                  <Pulsar size={42} color="#292929" />
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
    </div>
  )
}

export default BlogItem
