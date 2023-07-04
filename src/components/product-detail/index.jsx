import React, { useState } from "react"

import { CheckIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"

const ProductDetail = ({ data, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(data?.IMAGENES[0])

  const handleSelectedImage = (image) => {
    setSelectedImage(image)
  }
  return (
    <div className="item flex items-start max-w-[1200px] h-full bg-white">
      <div className="item-img w-mid h-[450px] m-auto">
        <img
          className="w-full h-full object-cover"
          style={{ backgroundColor: "transparent" }}
          src={selectedImage?.IMAGEN}
          alt={`Vela de color ${selectedImage?.CODIGO}, imagen ${selectedImage?.IMAGEN}`}
        />
      </div>
      <div className="item-info flex flex-col items-start gap-4 w-mid h-full p-8 overflow-y-auto overflow-x-hidden bg-tertiary-lighter">
        <div className="flex items-start justify-between w-full">
          <h3 className="text-dark font-bold text-2xl 2xxl:text-4xl">
            {data.NOMBRE}
          </h3>
          <button
            className="grid place-items-center"
            onClick={() => closeModal()}
          >
            <XMarkIcon className="cursor-pointer" width={40} />
          </button>
        </div>
        <p>
          <b>Código: </b>
          {selectedImage?.CODIGO || data.codigo}
        </p>
        <div className="item-info__detail flex items-start gap-4 flex-wrap h-full">
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Peso</h2>
            <p className="text-dark text-xs">{data.PESO}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Ancho</h2>
            <p className="text-dark text-xs">{data.ANCHO || "N/A"}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Duracion aprox (h)</h2>
            <p className="text-dark text-xs">{data.TIEMPO_QUEMADO}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Diámetro Inf. (cm)</h2>
            <p className="text-dark text-xs">
              {data.DIAMETRO_INFERIOR || "N/A"}
            </p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Diámetro Sup . (cm)</h2>
            <p className="text-dark text-xs">
              {data.DIAMETRO_SUPERIOR || "N/A"}
            </p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Altura (cm)</h2>
            <p className="text-dark text-xs">{data.ALTURA}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start gap-2 w-[125px] flex-grow">
            <h2 className="font-bold text-xs text-dark">Etiquetas</h2>
            <div className="flex flex-wrap gap-1">
              {data?.ETIQUETAS !== null ? (
                data?.ETIQUETAS?.map((tag) => {
                  return <p className="w-fit text-dark text-xs">{tag}</p>
                })
              ) : (
                <p className="w-fit text-dark text-xs">N/A</p>
              )}
            </div>
          </div>
        </div>
        <div className="item-colors flex items-center flex-wrap gap-4">
          <h2 className="font-bold text-xs text-dark">Colores</h2>
          <div className="item-colors__container flex items-center flew-wrap gap-2">
            {data.IMAGENES.map((image, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectedImage(image)}
                  className={
                    "w-[20px] h-[20px] rounded-full border-2 border-[#00000075] cursor-pointer"
                  }
                  style={
                    image.COLOR !== "multicolor"
                      ? { backgroundColor: image.COLOR }
                      : {
                          background:
                            "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,146,0,1) 12%, rgba(215,255,0,1) 24%, rgba(0,255,239,1) 36%, rgba(0,229,255,1) 52%, rgba(64,0,255,1) 68%, rgba(255,0,147,1) 85%, rgba(255,0,0,1) 100%)",
                        }
                  }
                ></div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-dark text-xs font-bold">Mecha</h2>
          <div className="flex items-center gap-4">
            <div
              className={`w-[105px] ${
                data.MECHA_ECOLOGICA === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs px-3 py-1 w-[120px] font-bold`}
            >
              <p className="flex-grow text-center">Ecológica</p>
              {data.MECHA_ECOLOGICA === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
            <div
              className={`w-[105px] ${
                data.MECHA_TRADICIONAL === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs px-3 py-1 w-[120px] font-bold`}
            >
              <p className="flex-grow text-center">Tradicional</p>
              {data.MECHA_TRADICIONAL === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
            <div
              className={`w-[105px] ${
                data?.MECHA_LED === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs px-3 py-1 w-[120px] font-bold`}
            >
              <p className="flex-grow text-center">LED</p>
              {data.MECHA_LED === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-dark text-xs font-bold">Aroma</h2>
          <div className="flex items-center gap-4">
            <div
              className={`w-[105px] ${
                data.AROMA > 0
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs px-3 py-1 w-[120px] font-bold`}
            >
              <p className="flex-grow text-center">Con aroma</p>
              {data.AROMA > 0 && <CheckIcon className="w-[15px] h-[15px]" />}
            </div>
            <div
              className={`w-[105px] ${
                data.AROMA === 0
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs px-3 py-1 w-[120px] font-bold`}
            >
              <p className="flex-grow text-center">Sin aroma</p>
              {data.AROMA === 0 && <CheckIcon className="w-[15px] h-[15px]" />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-dark text-xs font-bold">Nota</h2>
          <p className="text-xs italic text-dark">
            Consultá por otros colores y aromas disponibles
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
