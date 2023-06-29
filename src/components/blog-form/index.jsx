import React, { useState } from "react"

import Input from "../input"
import { toast } from "sonner"
import { useBlogStore } from "../../store"

const BlogForm = ({ handleModal }) => {
  const { addPost } = useBlogStore()
  const initialState = {
    titulo: "",
    descripcion: "",
    imagen_principal: null,
    imagen_detalle: null,
  }
  const [blogData, setBlogData] = useState(initialState)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === "checkbox" ? checked : value

    setBlogData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (e.target.id === "imagen_principal") {
      setBlogData((prevData) => ({
        ...prevData,
        imagen_principal: file,
      }))
    } else {
      setBlogData((prevData) => ({
        ...prevData,
        imagen_detalle: file,
      }))
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addPost(blogData)
      toast.success("Post agregado correctamente")
      setBlogData(initialState)
      handleModal()
    } catch (error) {
      toast.error("Ocurrió un error al agregar el post")
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-8 grid-rows-8 gap-4 w-[600px] h-[400px]"
    >
      <Input
        styles={"bg-white-transparent text-sm w-full col-span-8 row-span-1"}
        value={blogData.titulo}
        data={{
          type: "text",
          placeholder: "Título",
        }}
        required
        onChangeValue={handleChange}
        name={"titulo"}
      />
      <Input
        styles={
          "bg-white-transparent text-sm w-full flex-grow col-span-8 row-span-6"
        }
        value={blogData.descripcion}
        data={{
          type: "textarea",
          placeholder: "Descripción",
        }}
        required
        onChangeValue={handleChange}
        name={"descripcion"}
      />
      <div className="col-span-8 flex flex-col gap-2 justify-between">
        <label htmlFor="imagen_principal" className="text-xs text-dark">
          Imagen principal
        </label>
        <input
          className="bg-white-transparent grid place-self-end rounded-full w-full py-2 px-4 text-dark text-xs leading-tight focus:outline-none focus:shadow-outline row-span-1"
          type="file"
          id="imagen_principal"
          name="imagen_principal"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <div className="col-span-4 flex flex-col gap-2 justify-between">
        <label htmlFor="imagen_detalle" className="text-xs text-dark">
          Imagen de detalle
        </label>
        <input
          className="bg-white-transparent grid place-self-end rounded-full w-full py-2 px-4 text-dark text-xs leading-tight focus:outline-none focus:shadow-outline row-span-1"
          type="file"
          id="imagen_detalle"
          name="imagen_detalle"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <div className="flex items-end gap-4 justify-end w-full col-span-4">
        <button
          onClick={() => setBlogData(initialState)}
          className="bg-white-transparent text-sm duration-150 ease-in-out hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Limpiar
        </button>
        <button
          className="bg-white-transparent text-sm duration-150 ease-in-out hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

export default BlogForm
