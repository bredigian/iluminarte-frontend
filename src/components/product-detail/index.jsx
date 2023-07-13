import React, { useEffect, useState } from "react"

import { CheckIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"
import useWidth from "../../hooks/useWidth"

const ProductDetail = ({ data, closeModal }) => {
  const width = useWidth()

  const [selectedImage, setSelectedImage] = useState(data?.IMAGENES[0])
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleHover = (event) => {
    const container = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - container.left
    const y = event.clientY - container.top
    setCursorPosition({ x, y })
  }
  const handleSelectedImage = (image) => {
    setSelectedImage(image)
  }
  return (
    <div className="item flex xs:flex-col lg:flex-row xs:items-center lg:items-start xs:max-w-[83%] sm:max-w-full rounded-2xl xs:m-auto lg:max-w-[1200px] h-full bg-white">
      <div
        onMouseMove={handleHover}
        onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
        className="item-img xs:w-[100px] xs:object-cover xs:h-[160px] lg:w-mid lg:h-[450px] m-auto"
      >
        <img
          className="w-full h-full object-cover hover:cursor-crosshair"
          style={{ backgroundColor: "transparent" }}
          src={selectedImage?.IMAGEN}
          alt={`Vela de color ${selectedImage?.CODIGO}, imagen ${selectedImage?.IMAGEN}`}
        />
      </div>
      {width >= 970 && (
        <div
          className={`image-zoom absolute right-[45px] shadow-2xl bg-white translate-y-20 rounded-3xl overflow-hidden ${
            cursorPosition.x !== 0 && cursorPosition.y !== 0
              ? "visible opacity-100"
              : "invisible opacity-0"
          } w-[40%] h-[400px]`}
        >
          <img
            className="w-[170%] h-[170%] object-cover ml-52"
            style={{
              transform: `translate(-${cursorPosition.x}px, -${cursorPosition.y}px) scale(1.5)`,
            }}
            src={selectedImage?.IMAGEN}
            alt={`Vela de color ${selectedImage?.CODIGO}, imagen ${selectedImage?.IMAGEN}`}
          />
        </div>
      )}
      <div className="item-info flex xs:flex-row flex-wrap lg:flex-col items-start xs:gap-2 lg:gap-4 xs:w-full lg:w-mid h-full p-8 overflow-y-auto overflow-x-hidden rounded-b-2xl bg-tertiary-lighter">
        <div className="flex items-start xs:gap-4 sm:gap-0 justify-between w-full">
          <h3 className="text-dark font-bold xs:text-sm sm:text-lg lg:text-2xl 2xxl:text-4xl">
            {data.NOMBRE}
          </h3>
          <button
            className="grid place-items-center"
            onClick={() => closeModal()}
          >
            <XMarkIcon className="cursor-pointer xs:w-[20px] sm:w-[28px] lg:w-[40px]" />
          </button>
        </div>
        <p className="xs:text-sm lg:text-base text-dark">
          <b>Código: </b>
          {selectedImage?.CODIGO || data.codigo}
        </p>
        <div className="item-info__detail flex items-start xs:gap-2 lg:gap-4 flex-wrap h-full">
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Peso</h2>
            <p className="text-dark text-xs">{data.PESO}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Ancho</h2>
            <p className="text-dark text-xs">{data.ANCHO || "N/A"}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Duracion aprox (h)</h2>
            <p className="text-dark text-xs">{data.TIEMPO_QUEMADO}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Diámetro Inf. (cm)</h2>
            <p className="text-dark text-xs">
              {data.DIAMETRO_INFERIOR || "N/A"}
            </p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Diámetro Sup . (cm)</h2>
            <p className="text-dark text-xs">
              {data.DIAMETRO_SUPERIOR || "N/A"}
            </p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px]">
            <h2 className="font-bold text-xs text-dark">Altura (cm)</h2>
            <p className="text-dark text-xs">{data.ALTURA}</p>
          </div>
          <div className="item-info__detail-item flex flex-col items-start xs:gap-1 lg:gap-2 w-[125px] flex-grow">
            <h2 className="font-bold text-xs text-dark">Etiquetas</h2>
            <div className="flex flex-wrap gap-1 xs:max-h-[34px] lg:max-h-[50px] overflow-auto">
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
        <div className="item-colors flex items-center flex-wrap xs:gap-2 lg:gap-4">
          <h2 className="font-bold text-xs text-dark">Colores</h2>
          <div className="item-colors__container flex items-center flew-wrap gap-2">
            {data.IMAGENES.map((image, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectedImage(image)}
                  className={
                    "xs:w-[15px] xs:h-[15px] sm:w-[20px] sm:h-[20px] rounded-full border-2 border-[#00000075] cursor-pointer"
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
        <div className="flex flex-col items-start xs:gap-1 lg:gap-2">
          <h2 className="text-dark text-xs font-bold">Mecha</h2>
          <div className="flex items-center flex-wrap xs:gap-2 lg:gap-4">
            <div
              className={`w-[105px] ${
                data.MECHA_ECOLOGICA === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:w-[100px] sm:w-[120px] font-bold`}
            >
              <p className="flex-grow text-center xs:text-[11px] sm:text-xs">
                Ecológica
              </p>
              {data.MECHA_ECOLOGICA === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
            <div
              className={`w-[105px] ${
                data.MECHA_TRADICIONAL === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:w-[100px] sm:w-[120px] font-bold`}
            >
              <p className="flex-grow text-center xs:text-[11px] sm:text-xs">
                Tradicional
              </p>
              {data.MECHA_TRADICIONAL === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
            <div
              className={`w-[105px] ${
                data?.MECHA_LED === 1
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:w-[100px] sm:w-[120px] font-bold`}
            >
              <p className="flex-grow text-center xs:text-[11px] sm:text-xs">
                LED
              </p>
              {data.MECHA_LED === 1 && (
                <CheckIcon className="w-[15px] h-[15px]" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start xs:gap-1 lg:gap-2">
          <h2 className="text-dark text-xs font-bold">Aroma</h2>
          <div className="flex items-center xs:gap-2 lg:gap-4">
            <div
              className={`w-[105px] ${
                data.AROMA > 0
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:w-[100px] sm:w-[120px] font-bold`}
            >
              <p className="flex-grow text-center xs:text-[11px] sm:text-xs">
                Con aroma
              </p>
              {data.AROMA > 0 && <CheckIcon className="w-[15px] h-[15px]" />}
            </div>
            <div
              className={`w-[105px] ${
                data.AROMA === 0
                  ? "bg-tertiary text-white"
                  : "bg-gray-light text-dark"
              } flex items-center justify-between rounded-full text-xs xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:w-[100px] sm:w-[120px] font-bold`}
            >
              <p className="flex-grow text-center xs:text-[11px] sm:text-xs">
                Sin aroma
              </p>
              {data.AROMA === 0 && <CheckIcon className="w-[15px] h-[15px]" />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start xs:gap-1 lg:gap-2">
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
