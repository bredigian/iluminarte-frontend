import React, { useState } from "react"

import { Pulsar } from "@uiball/loaders"
import { toast } from "sonner"
import { useProductsStore } from "../../store"

const DecorativeAspects = ({ handleModal }) => {
  const [isUploading, setIsUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const { setImageHomeProductOfTheMonth } = useProductsStore()

  const handleChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsUploading(true)
    try {
      await setImageHomeProductOfTheMonth(selectedImage)
      setSelectedImage(null)
      setIsUploading(false)
      toast.success("Imagen actualizada correctamente")
      handleModal()
    } catch (erro) {
      toast.error("Ocurrió un error al subir la imagen")
      setIsUploading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-start gap-3 col-span-12">
        <label
          className="text-xs text-dark font-bold"
          htmlFor="decorativa_del_mes"
        >
          Imagen decorativa de la Vela del Mes
        </label>
        <input
          className="bg-white-transparent rounded-full w-full py-2 px-4 text-dark text-xs leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          id="decorativa_del_mes"
          name="decorativa_del_mes"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-end w-full gap-4 justify-center">
        {!isUploading ? (
          <button
            className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 w-[100px] rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Actualizar
          </button>
        ) : (
          <div className="grid place-items-center w-[100px]">
            <Pulsar color="#292929" size={35} />
          </div>
        )}
      </div>
    </form>
  )
}

export default DecorativeAspects
