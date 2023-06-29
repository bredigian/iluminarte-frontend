import React, { useEffect, useState } from "react"

import Input from "../input"
import { Pulsar } from "@uiball/loaders"
import { candlesColors } from "../../constants/candles/colors"
import { useProductsStore } from "../../store/products"

const ProductForm = ({ showMessage, handleModal }) => {
  const { categories, getCategories, addProduct } = useProductsStore()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const initialState = {
    codigo: "",
    nombre: "",
    peso: "",
    altura: "",
    ancho: "",
    diametro_superior: "",
    diametro_inferior: "",
    mecha_ecologica: false,
    mecha_led: false,
    mecha_tradicional: false,
    para_navidad: false,
    con_aroma: false,
    sin_aroma: false,
    tiempo_quemado: "",
    imagenes: [],
    colores: [],
    etiquetas: [],
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
      etiquetas: value.split(","),
    }))
  }

  const handleChangeColor = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setSelectedColors((prevSelectedColors) => [...prevSelectedColors, value])
    } else {
      setSelectedColors((prevSelectedColors) =>
        prevSelectedColors.filter((color) => color !== value)
      )
    }
  }

  const handleChangeCategory = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        value,
      ])
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((category) => category !== value)
      )
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsUploading(true)
    const data = {
      ...productData,
      colores: selectedColors,
      categorias: selectedCategories,
    }
    try {
      await addProduct(data)
      showMessage("Producto agregado correctamente", "success")
      handleModal()
      setProductData(initialState)
      setSelectedCategories([])
      setIsUploading(false)
    } catch (error) {
      showMessage(error.message, "error")
      setIsUploading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <form
      onSubmit={onSubmit}
      className="w-full grid grid-cols-12 gap-2 max-w-lg"
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
      <div className="flex items-center gap-3 col-span-6">
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
      <div className="flex items-center gap-3 col-span-6">
        <input
          type="checkbox"
          id="mecha_tradicional"
          name="mecha_tradicional"
          checked={productData.mecha_tradicional}
          onChange={handleChange}
        />
        <label className="text-dark text-xs" htmlFor="mecha_tradicional">
          Mecha tradicional
        </label>
      </div>
      <div className="flex items-center gap-3 col-span-6">
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
      <div className="flex items-center gap-3 col-span-6">
        <input
          type="checkbox"
          id="mecha_led"
          name="mecha_led"
          checked={productData.mecha_led}
          onChange={handleChange}
        />
        <label className="text-dark text-xs" htmlFor="mecha_led">
          Mecha LED
        </label>
      </div>
      <div className="flex items-center gap-3 col-span-6">
        <input
          type="checkbox"
          id="para_navidad"
          name="para_navidad"
          checked={productData.para_navidad}
          onChange={handleChange}
        />
        <label className="text-dark text-xs" htmlFor="para_navidad">
          Para navidad
        </label>
      </div>
      <div className="flex flex-col items-start gap-3 col-span-12">
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
      <div className="flex flex-col items-start gap-3 col-span-12">
        <label className="text-xs text-dark font-bold" htmlFor="colores">
          Colores
        </label>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {candlesColors.map((color) => {
            return (
              <div
                key={color.nombre + color.valor}
                className="flex items-center gap-3 col-span-6 w-[120px]"
              >
                <input
                  type="checkbox"
                  id={color.valor}
                  name={color.valor}
                  value={color.valor}
                  checked={selectedColors.includes(color.valor)}
                  onChange={handleChangeColor}
                />
                <label className="text-dark text-xs" htmlFor={color.valor}>
                  {color.nombre}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 col-span-6">
        <label className="text-xs text-dark font-bold" htmlFor="categoria">
          Categorías
        </label>
        <div className="grid grid-cols-6 gap-1 w-full">
          {categories?.map((category) => {
            return (
              <div className="flex items-center gap-3 col-span-3">
                <input
                  type="checkbox"
                  id={category.VALOR}
                  name={category.VALOR}
                  value={category.VALOR}
                  checked={selectedCategories.includes(category.VALOR)}
                  onChange={handleChangeCategory}
                />
                <label className="text-dark text-xs" htmlFor={category.VALOR}>
                  {category.NOMBRE}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex items-end w-full gap-4 justify-end col-span-6">
        <button
          onClick={() => setProductData(initialState)}
          className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 w-[100px] rounded-full focus:outline-none focus:shadow-outline"
        >
          Limpiar
        </button>
        {!isUploading ? (
          <button
            className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 w-[100px] rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
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

export default ProductForm
