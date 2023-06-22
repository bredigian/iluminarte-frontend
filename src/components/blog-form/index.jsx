import React, { useState } from "react"

import Input from "../input"
import { toast } from "sonner"
import { useBlogStore } from "../../store"

const BlogForm = ({ handleModal }) => {
  const { addPost } = useBlogStore()
  const initialState = {
    titulo: "",
    descripcion: "",
    imagenes: [],
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
    const files = e.target.files
    let newImagenes = []
    Object.keys(files).forEach((key) => {
      const file = files[key]
      newImagenes[key] = file
    })
    setBlogData((prevData) => ({
      ...prevData,
      imagenes: [...newImagenes],
    }))
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
      <input
        className="bg-white-transparent grid place-self-end rounded-full w-full py-2 px-4 text-dark text-xs leading-tight focus:outline-none focus:shadow-outline col-span-4 row-span-1"
        type="file"
        id="imagen_principal"
        name="imagen_principal"
        accept="image/*"
        onChange={handleImageChange}
        multiple
        required
      />
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
