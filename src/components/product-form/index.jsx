import React, { useEffect, useState } from "react"

import Input from "../input"
import { useProductsStore } from "../../store/products"

const ProductForm = ({ showMessage, handleModal }) => {
  const { categories, getCategories, addProduct } = useProductsStore()
  const initialState = {
    codigo: "",
    nombre: "",
    peso: "",
    altura: "",
    ancho: "",
    diametro_superior: "",
    diametro_inferior: "",
    mecha_ecologica: false,
    con_aroma: false,
    sin_aroma: false,
    tiempo_quemado: "",
    imagenes: [],
    colores: [],
    etiquetas: [],
    categoria: "",
  }
  const [productData, setProductData] = useState(initialState)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === "checkbox" ? checked : value

    setProductData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }

  const handleImageChange = (e) => {
    const files = e.target.files // Obtiene los archivos seleccionados
    let newImagenes = []
    Object.keys(files).forEach((key) => {
      const file = files[key]
      newImagenes[key] = file
    })
    setProductData((prevData) => ({
      ...prevData,
      imagenes: [...newImagenes],
    }))
  }

  const handleTagChange = (e) => {
    const { value } = e.target
    setProductData((prevData) => ({
      ...prevData,
      etiquetas: value.split(",").map((tag) => tag.trim()),
    }))
  }

  const handleColorChange = (e) => {
    const { value } = e.target
    setProductData((prevData) => ({
      ...prevData,
      colores: value.split(",").map((color) => color.trim()),
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await addProduct(productData)
      showMessage("Producto agregado correctamente", "success")
      handleModal()
      setProductData(initialState)
    } catch (error) {
      showMessage(error.message, "error")
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <form
      onSubmit={onSubmit}
      className="w-full grid grid-cols-12 gap-3 max-w-lg"
    >
      <Input
        styles={"bg-white-transparent text-xs col-span-6"}
        value={productData.codigo}
        data={{
          type: "text",
          placeholder: "Código",
        }}
        required
        onChangeValue={handleChange}
        name={"codigo"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-3"}
        value={productData.peso}
        data={{
          type: "number",
          step: "any",
          placeholder: "Peso",
        }}
        required
        onChangeValue={handleChange}
        name={"peso"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-3"}
        value={productData.altura}
        data={{
          type: "number",
          step: "any",
          placeholder: "Altura",
        }}
        required
        onChangeValue={handleChange}
        name={"altura"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-6"}
        value={productData.nombre}
        data={{
          type: "text",
          placeholder: "Nombre",
        }}
        required
        onChangeValue={handleChange}
        name={"nombre"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-3"}
        value={productData.ancho}
        data={{
          type: "number",
          step: "any",
          placeholder: "Ancho",
        }}
        onChangeValue={handleChange}
        name={"ancho"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-3"}
        value={productData.tiempo_quemado}
        data={{
          type: "number",
          step: "any",
          placeholder: "Tie. quema",
        }}
        required
        onChangeValue={handleChange}
        name={"tiempo_quemado"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-6"}
        value={productData.diametro_superior}
        data={{
          type: "number",
          step: "any",
          placeholder: "Diámetro superior",
        }}
        onChangeValue={handleChange}
        name={"diametro_superior"}
      />
      <Input
        styles={"bg-white-transparent text-xs col-span-6"}
        value={productData.diametro_inferior}
        data={{
          type: "number",
          step: "any",
          placeholder: "Diámetro inferior",
        }}
        onChangeValue={handleChange}
        name={"diametro_inferior"}
      />
      <div className="flex flex-col gap-3 col-span-12">
        <Input
          styles={"bg-white-transparent text-xs"}
          value={productData.etiquetas}
          data={{
            type: "textarea",
            placeholder: "Etiquetas",
          }}
          onChangeValue={handleTagChange}
          name={"etiquetas"}
        />
        <p className="italic text-dark text-[0.7rem]">
          Ingrese las etiquetas separadas por una coma (ej. etiqueta1,
          etiqueta2)
        </p>
      </div>
      <div className="flex items-center gap-3 col-span-6">
        <input
          type="checkbox"
          id="mecha_ecologica"
          name="mecha_ecologica"
          checked={productData.mecha_ecologica}
          onChange={handleChange}
        />
        <label className="text-dark text-xs" htmlFor="mecha_ecologica">
          Mecha ecológica
        </label>
      </div>
      <div className="col-span-6 flex gap-3 items-start">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="con_aroma"
            name="con_aroma"
            checked={productData.con_aroma}
            onChange={handleChange}
          />
          <label className="text-dark text-xs" htmlFor="con_aroma">
            Con aroma
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="sin_aroma"
            name="sin_aroma"
            checked={productData.sin_aroma}
            onChange={handleChange}
          />
          <label className="text-dark text-xs" htmlFor="sin_aroma">
            Sin aroma
          </label>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 col-span-6">
        <label className="text-xs text-dark font-bold" htmlFor="imagenes">
          Imágenes
        </label>
        <input
          className="bg-white-transparent rounded-full w-full py-2 px-4 text-dark text-xs leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          id="imagenes"
          name="imagenes"
          accept="image/*"
          onChange={handleImageChange}
          multiple
          required
        />
      </div>
      <div className="flex flex-col items-start gap-3 col-span-6">
        <label className="text-xs text-dark font-bold" htmlFor="colores">
          Colores
        </label>
        <Input
          styles={"bg-white-transparent text-xs w-full"}
          value={productData.colores}
          data={{
            type: "text",
            placeholder: "Colores",
          }}
          required
          onChangeValue={handleColorChange}
          name={"colores"}
        />
        <p className="italic text-dark text-[0.7rem]">
          Ingrese los colores separados por una coma y en formato hexadecimal
          [ej. #FFFFFF (blanco), #000000 (negro)]
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 col-span-6">
        <label className="text-xs text-dark font-bold" htmlFor="categoria">
          Categoría
        </label>
        <select
          className="appearance-none bg-white-transparent rounded-full w-full text-xs py-2 px-4 text-dark leading-tight focus:outline-none focus:shadow-outline"
          id="categoria"
          name="categoria"
          value={productData.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categories?.map((category) => (
            <option key={category?.ID} value={category?.VALOR}>
              {category?.NOMBRE}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end gap-4 justify-end col-span-6">
        <button
          onClick={() => setProductData(initialState)}
          className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Limpiar
        </button>
        <button
          className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

export default ProductForm
