import React, { useState } from "react"

const ProductItem = ({ data }) => {
  const {
    ID_IMG,
    ID_GRUPO,
    nombre,
    peso,
    altura,
    diametro_superior,
    diametro_inferior,
    tiempo_quemado,
    ancho,
    largo,
    mecha_ecologica,
    mecha_tradicional,
    aroma,
    etiquetas,
    tamanios,
    categoria_religiosa,
    categoria_decorativa,
    categoria_regalo,
    navidad,
    colores,
  } = data
  const [color, setColor] = useState("white")
  const colores_values = JSON.parse(colores)
  return (
    <div className="item flex flex-col items-start gap-4 w-3 h-product bg-primary p-4">
      <h3 className="font-serif text-white">{nombre}</h3>
      {colores_values.map((color) => {
        return (
          <button
            onClick={handleChangeColor}
            type="button"
            className="text-white text-xs italic"
          >
            {color}
          </button>
        )
      })}
    </div>
  )
}

export default ProductItem
