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
    codigo_principal: "",
    nombre: "",
    peso: "",
    altura: "",
    ancho: "",
    diametro_superior: "",
    diametro_inferior: "",
    mecha_ecologica: false,
    mecha_led: false,
    mecha_tradicional: false,
    con_aroma: false,
    sin_aroma: false,
    tiempo_quemado: "",
    imagenes: [],
    codigos: [],
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

  const handleTagCodeChange = (e) => {
    const { value } = e.target
    if (e.target.name === "etiquetas") {
      setProductData((prevData) => ({
        ...prevData,
        etiquetas: value.split(","),
      }))
    } else {
      setProductData((prevData) => ({
        ...prevData,
        codigos: value.split(","),
      }))
    }
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

  const isValidForm = selectedCategories.length > 0 && selectedColors.length > 0

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
    <form onSubmit={onSubmit} className="w-full grid grid-cols-12 gap-2">
      <Input
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-8"}
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
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
        value={productData.codigo_principal}
        data={{
          type: "text",
          placeholder: "Código principal",
        }}
        required
        onChangeValue={handleChange}
        name={"codigo_principal"}
      />
      <Input
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
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
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
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
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
        value={productData.tiempo_quemado}
        data={{
          type: "number",
          step: "any",
          placeholder: "Tiempo quemado",
        }}
        required
        onChangeValue={handleChange}
        name={"tiempo_quemado"}
      />
      <Input
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
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
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
        value={productData.diametro_inferior}
        data={{
          type: "number",
          step: "any",
          placeholder: "Diámetro inferior",
        }}
        onChangeValue={handleChange}
        name={"diametro_inferior"}
      />
      <Input
        styles={"bg-white-transparent text-xs"}
        colSpan={"lg:col-span-4"}
        value={productData.ancho}
        data={{
          type: "number",
          step: "any",
          placeholder: "Ancho",
        }}
        onChangeValue={handleChange}
        name={"ancho"}
      />
      <div className="flex flex-col gap-1 col-span-12">
        <p className="italic text-dark text-[0.7rem] ml-2">
          Ingrese las etiquetas separadas por una coma (ej. etiqueta1,
          etiqueta2)
        </p>
        <Input
          styles={"bg-white-transparent text-xs min-h-[80px]"}
          value={productData.etiquetas}
          data={{
            type: "textarea",
            placeholder: "Etiquetas",
          }}
          onChangeValue={handleTagCodeChange}
          name={"etiquetas"}
        />
      </div>
      <div className="flex items-center gap-2 col-span-3">
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

      <div className="flex items-center gap-2 col-span-3">
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
      <div className="flex items-center gap-2 col-span-2">
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
      <div className="flex items-center gap-2 col-span-2">
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
      <div className="flex items-center gap-2 col-span-2">
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
      <div className="flex flex-col items-start gap-2 col-span-12">
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
      <div className="flex flex-col items-start gap-2 col-span-12">
        <div className="flex items-center w-full justify-between">
          <label className="text-xs text-dark font-bold" htmlFor="codigos">
            Códigos
          </label>
          <p className="text-[0.7rem] text-dark italic">
            Ingrese los codigos en el orden que se encuentran las imagenes en su
            computadora
          </p>
        </div>
        <Input
          styles={"bg-white-transparent text-xs w-full min-h-[100px]"}
          value={productData.codigos}
          data={{
            type: "textarea",
            placeholder: "Códigos de cada imágen separados por una coma",
          }}
          required
          onChangeValue={handleTagCodeChange}
          name={"codigos"}
        />
      </div>
      <div className="flex flex-col items-start gap-2 col-span-12">
        <div className="flex items-start justify-between w-full">
          <label className="text-xs text-dark font-bold" htmlFor="colores">
            Colores
          </label>
          <p className="italic text-dark text-[0.7rem]">
            Seleccione los colores en el orden que se encuentran las imagenes en
            su computadora
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          {candlesColors.map((color) => {
            return (
              <div
                key={color.nombre + color.valor}
                className="flex items-center gap-2 col-span-6 w-[120px]"
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
      <div className="flex flex-col items-start gap-2 col-span-8">
        <label className="text-xs text-dark font-bold" htmlFor="categoria">
          Categorías
        </label>
        <div className="grid grid-cols-8 gap-1 w-full">
          {categories?.map((category) => {
            return (
              <div className="flex items-center gap-2 col-span-2">
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
      <div className="flex items-end w-full gap-4 justify-end col-span-4">
        <button
          onClick={() => setProductData(initialState)}
          className="bg-white-transparent text-sm hover:bg-dark hover:text-white text-dark font-bold py-2 px-4 w-[100px] rounded-full focus:outline-none focus:shadow-outline"
        >
          Limpiar
        </button>
        {!isUploading ? (
          <button
            disabled={!isValidForm}
            className={`bg-white-transparent text-sm ${
              isValidForm && "hover:bg-dark hover:text-white"
            } text-dark font-bold py-2 px-4 w-[100px] rounded-full focus:outline-none focus:shadow-outline`}
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
